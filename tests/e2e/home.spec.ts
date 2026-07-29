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

test('publishes crawlable metadata and a sitemap', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', '/favicon.svg');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'index, follow');

  const sitemap = await page.request.get('/sitemap.xml');
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain('<loc>https://diogobastos.pages.dev/projects/</loc>');
});

for (const path of ['/', '/projects/', '/resume/']) {
  test(`has no automatically detectable accessibility violations on ${path}`, async ({ page }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
