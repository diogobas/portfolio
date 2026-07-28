import { expect, test } from '@playwright/test';

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

  await expect(page.getByRole('heading', { name: 'Selected work since 2017' })).toBeVisible();
  await expect(page.locator('[data-hydrated]')).toHaveAttribute('data-hydrated', 'true');
  await expect(page.locator('.archive-heading > p')).toHaveText('6 projects');

  await page.getByRole('searchbox', { name: 'Search' }).fill('OttoLearn');
  await expect(page.locator('.archive-heading > p')).toHaveText('1 project');
  await expect(page.getByRole('heading', { name: 'HMH Classcraft' })).not.toBeVisible();
});
