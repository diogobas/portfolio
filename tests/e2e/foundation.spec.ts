import { expect, test } from '@playwright/test';

test('renders the portfolio foundation', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Diogo Bastos | Senior Full-Stack Software Engineer');
  await expect(page.getByRole('heading', { name: 'Diogo Bastos' })).toBeVisible();
});
