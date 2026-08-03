import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

import { resume } from '../src/data/resume.ts';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pdfPath = path.join(projectRoot, 'public/resume/diogo-bastos-resume-ats.pdf');
const bytes = new Uint8Array(await readFile(pdfPath));
const pdf = await getDocument({ data: bytes, useSystemFonts: true }).promise;

assert.ok(pdf.numPages <= 2, `Expected at most 2 pages, found ${pdf.numPages}.`);

const pageTexts = [];
for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
  const page = await pdf.getPage(pageNumber);
  const content = await page.getTextContent();
  pageTexts.push(
    content.items
      .filter((item) => 'str' in item)
      .map((item) => item.str)
      .join(' ')
  );
}

const text = pageTexts.join(' ').replace(/\s+/g, ' ').trim();
assert.ok(text.length > 1_000, 'The PDF does not contain enough searchable text.');

const requiredIdentity = [
  resume.identity.name,
  resume.identity.role,
  resume.identity.location,
  resume.identity.email,
  resume.identity.portfolio,
  resume.identity.linkedin,
  resume.identity.github,
];

for (const value of requiredIdentity) {
  assert.ok(text.includes(value), `Missing identity or contact text: ${value}`);
}

function assertInOrder(values, label) {
  let cursor = -1;
  for (const value of values) {
    const index = text.indexOf(value, cursor + 1);
    assert.ok(index > cursor, `${label} is missing or out of order: ${value}`);
    cursor = index;
  }
}

assertInOrder(
  ['Professional Summary', 'Core Skills', 'Professional Experience', 'Education'],
  'Résumé section'
);

assertInOrder(
  resume.experience.flatMap((experience) => [
    experience.period,
    experience.role,
    experience.company,
  ]),
  'Experience entry'
);

for (const group of resume.skills) {
  assert.ok(text.includes(group.category), `Missing skill category: ${group.category}`);
  for (const skill of group.items) {
    assert.ok(text.includes(skill), `Missing core skill: ${skill}`);
  }
}

assert.doesNotMatch(text, /D\s+I\s+O\s+G\s+O/i, 'The name is letter-spaced in extracted text.');
assert.doesNotMatch(
  text,
  /P\s+R\s+O\s+F\s+E\s+S\s+S\s+I\s+O\s+N\s+A\s+L/i,
  'A section heading is letter-spaced in extracted text.'
);

const markInfo = await pdf.getMarkInfo();
assert.equal(markInfo?.Marked, true, 'The PDF is not tagged for accessibility.');

console.log(
  `Résumé PDF check passed: ${pdf.numPages} pages, ${text.length} searchable characters.`
);
