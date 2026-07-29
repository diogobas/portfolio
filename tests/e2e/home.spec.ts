import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('renders the home page and its main sections', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Diogo Bastos | Senior Full-Stack Software Engineer');
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Featured projects' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Let’s connect' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/diogo-bastos/',
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

test('offers a sanitized public résumé', async ({ page }) => {
  await page.goto('/resume/');

  await expect(page.getByRole('heading', { name: 'Diogo Bastos' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Senior Java Developer' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Download PDF' })).toHaveAttribute(
    'href',
    '/resume/diogo-bastos-resume.pdf',
  );
  await expect(page.locator('body')).not.toContainText(/\+\d[\d\s()-]{7,}/);
});

test('links to licenses and certifications without rendering them on the home page', async ({ page }) => {
  await page.goto('/certifications/');

  await expect(page.getByRole('heading', { name: 'Licenses & certifications' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Learning Kubernetes' })).toBeVisible();
  await expect(page.getByText('Credential ID UC-G8YMB8HT')).toBeVisible();
  await expect(page.locator('.certification-card')).toHaveCount(17);

  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Certifications' })).toHaveAttribute(
    'href',
    '/certifications/',
  );
  await expect(page.locator('.certification-card')).toHaveCount(0);
});

test('links to the full career history without expanding the home timeline', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'View full career' })).toHaveAttribute('href', '/experience/');
  await expect(page.getByText('PPI-Multitask', { exact: true })).not.toBeVisible();

  await page.goto('/experience/');
  await expect(page.getByRole('heading', { name: 'Full experience' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Fairstone Bank/ })).toBeVisible();
  await expect(page.getByText('Sistema Inteligente de Automação PLUS · SIAPLUS', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: /Pearson · eDynamic Learning/ })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/company/pearson/',
  );
  await expect(page.getByRole('link', { name: /Pearson · eDynamic Learning/ })).toHaveAttribute(
    'target',
    '_blank',
  );
  await expect(page.getByRole('link', { name: /Sistema Inteligente de Automação PLUS · SIAPLUS/ })).toHaveCount(0);
});

test('publishes crawlable metadata and a sitemap', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/favicon.svg');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'index, follow');

  const sitemap = await page.request.get('/sitemap.xml');
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain('<loc>https://diogobastos.pages.dev/projects/</loc>');
  expect(await sitemap.text()).toContain('<loc>https://diogobastos.pages.dev/experience/</loc>');
});

for (const path of ['/', '/projects/', '/experience/', '/resume/', '/certifications/']) {
  test(`has no automatically detectable accessibility violations on ${path}`, async ({ page }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
