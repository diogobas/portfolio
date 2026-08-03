import { execFile } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { promisify } from 'node:util';

import { chromium } from '@playwright/test';

const run = promisify(execFile);
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const astroCliPath = path.join(projectRoot, 'node_modules/astro/bin/astro.mjs');
const distPath = path.join(projectRoot, 'dist');
const outputPath = path.join(projectRoot, 'public/resume/diogo-bastos-resume.pdf');
const resumeUrl = 'http://resume.local/resume/';

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

await run(process.execPath, [astroCliPath, 'build'], {
  cwd: projectRoot,
  env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
});

const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage();

  await page.route('http://resume.local/**', async (route) => {
    const url = new URL(route.request().url());
    const relativePath = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const requestedPath = relativePath.endsWith('/')
      ? path.join(relativePath, 'index.html')
      : relativePath;
    const filePath = path.resolve(distPath, requestedPath);

    if (!filePath.startsWith(`${distPath}${path.sep}`)) {
      await route.abort();
      return;
    }

    try {
      await route.fulfill({
        body: await readFile(filePath),
        contentType: contentTypes[path.extname(filePath)] ?? 'application/octet-stream',
      });
    } catch {
      await route.abort();
    }
  });

  await page.goto(resumeUrl, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: outputPath,
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
  });
  console.log(`Generated ${path.relative(projectRoot, outputPath)}`);
} finally {
  await browser.close();
}
