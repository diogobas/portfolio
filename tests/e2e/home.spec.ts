import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('renders the home page and its main sections', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Diogo Bastos | Senior Full-Stack Software Engineer');
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Featured projects' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'View HTML résumé' })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'View career history' })).toHaveAttribute(
    'href',
    '/experience/'
  );
  await expect(page.getByRole('link', { name: 'Download résumé PDF' })).toHaveAttribute(
    'href',
    '/resume/diogo-bastos-resume.pdf'
  );
  await expect(page.getByRole('link', { name: /View Full Project Archive/ })).toHaveAttribute(
    'href',
    '/projects/'
  );
  await expect(page.getByText('Currently', { exact: true })).toHaveCount(0);
  await expect(page.getByRole('link', { name: /View full career/ })).toHaveCount(0);
  await expect(page.getByRole('link', { name: /View archive/ })).toHaveCount(0);
  await expect(page.locator('.project-preview')).toHaveCount(4);
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/diogo-bastos/'
  );
});

test('opens the searchable project archive', async ({ page }) => {
  await page.goto('/projects/');

  await expect(page.getByRole('heading', { name: 'Selected work' })).toBeVisible();
  await expect(page.locator('[data-hydrated]')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.locator('.archive-heading > p')).toHaveText('11 projects');

  await page.getByRole('searchbox', { name: 'Search' }).fill('OttoLearn');
  await expect(page.locator('.archive-heading > p')).toHaveText('1 project');
  await expect(page.getByRole('heading', { name: 'HMH Classcraft' })).not.toBeVisible();

  await page.getByRole('combobox', { name: 'Type' }).selectOption('personal');
  await expect(page.locator('.archive-heading > p')).toHaveText('0 projects');
  await expect(page).toHaveURL(/type=personal/);
  await page.getByRole('button', { name: 'Clear filters' }).click();
  await expect(page.locator('.archive-heading > p')).toHaveText('11 projects');
});

test('links to licenses and certifications without rendering them on the home page', async ({
  page,
}) => {
  await page.goto('/certifications/');

  await expect(page.getByRole('heading', { name: 'Licenses & certifications' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Learning Kubernetes' })).toBeVisible();
  await expect(page.getByText('Credential ID UC-G8YMB8HT')).toBeVisible();
  await expect(page.locator('.certification-card')).toHaveCount(17);

  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Certifications' })).toHaveAttribute(
    'href',
    '/certifications/'
  );
  await expect(page.locator('.certification-card')).toHaveCount(0);
});

test('keeps the full career history available without expanding the home timeline', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.getByText('PPI-Multitask', { exact: true })).not.toBeVisible();

  await page.goto('/experience/');
  await expect(page.getByRole('heading', { name: 'Full experience' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Fairstone Bank/ })).toBeVisible();
  await expect(page.locator('img[src="/images/companies/fairstone.svg"]')).toBeVisible();
  await expect(
    page.getByText('Sistema Inteligente de Automacao PLUS - SIAPLUS', { exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: /Pearson Education - eDynamic Learning/ })
  ).toHaveAttribute('href', 'https://www.linkedin.com/company/pearson/');
  await expect(
    page.getByRole('link', { name: /Pearson Education - eDynamic Learning/ })
  ).toHaveAttribute('target', '_blank');
  await expect(
    page.getByRole('link', { name: /Sistema Inteligente de Automacao PLUS - SIAPLUS/ })
  ).toHaveCount(0);
});

test('publishes a semantic ATS-friendly résumé without requiring JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/resume/');

  await expect(page).toHaveTitle('Résumé | Diogo Bastos');
  await expect(page.getByRole('heading', { level: 1, name: 'Diogo Bastos' })).toBeVisible();
  await expect(page.locator('.resume-title')).toHaveText('Senior Full-Stack Software Engineer');
  await expect(page.getByRole('heading', { name: 'Professional Summary' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Core Skills' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Professional Experience' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Training' })).toBeVisible();
  await expect(page.getByText('Fairstone Bank', { exact: false })).toBeVisible();
  await expect(page.getByRole('link', { name: 'diogovvb@gmail.com' })).toHaveAttribute(
    'href',
    'mailto:diogovvb@gmail.com'
  );
  await expect(page.getByRole('link', { name: 'https://diogobastos.pages.dev' })).toHaveAttribute(
    'href',
    'https://diogobastos.pages.dev'
  );

  const schema = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}'
  );
  expect(schema['@graph'][0]['@type']).toBe('ProfilePage');
  expect(schema['@graph'][1]).toMatchObject({
    '@type': 'Person',
    name: 'Diogo Bastos',
    jobTitle: 'Senior Full-Stack Software Engineer',
    url: 'https://diogobastos.pages.dev',
  });

  const visualPdf = await page.request.get('/resume/diogo-bastos-resume.pdf');
  expect(visualPdf.ok()).toBeTruthy();
  expect(visualPdf.headers()['content-type']).toContain('application/pdf');

  const atsPdf = await page.request.get('/resume/diogo-bastos-resume-ats.pdf');
  expect(atsPdf.ok()).toBeTruthy();
  expect(atsPdf.headers()['content-type']).toContain('application/pdf');
  await expect(page.locator('#ats-resume-download')).toBeHidden();

  await page.goto('/resume/#ats-resume-download');
  await expect(page.locator('#ats-resume-download')).toBeVisible();

  await context.close();
});

test('publishes crawlable metadata and a sitemap', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/favicon.svg');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'index, follow');

  const sitemap = await page.request.get('/sitemap.xml');
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain('<loc>https://diogobastos.pages.dev/projects/</loc>');
  expect(await sitemap.text()).toContain('<loc>https://diogobastos.pages.dev/experience/</loc>');
  expect(await sitemap.text()).toContain('<loc>https://diogobastos.pages.dev/resume/</loc>');
  expect(await sitemap.text()).not.toContain('/resume/diogo-bastos-resume.pdf');
});

for (const path of ['/', '/projects/', '/experience/', '/resume/', '/certifications/']) {
  test(`has no automatically detectable accessibility violations on ${path}`, async ({ page }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
