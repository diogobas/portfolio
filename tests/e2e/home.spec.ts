import { expect, test } from '@playwright/test';

test('renders the home page and its main sections', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Diogo Bastos | Senior Full-Stack Software Engineer');
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Let’s connect' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/diogo-bastos/',
  );
});
