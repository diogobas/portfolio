import { test, expect } from '@playwright/test';

/**
 * Example Integration Test Template (Playwright)
 * This demonstrates E2E testing structure for critical user flows
 */

test.describe('Example Integration Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to home page before each test
    await page.goto('/');
  });

  test('should load homepage', async ({ page }) => {
    // Verify page loads
    const title = page.locator('title');
    await expect(title).toContainText('Diogo Bastos');

    // Check for main content
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('should have accessibility features', async ({ page }) => {
    // Check for landmark elements
    const header = page.locator('header');
    await expect(header).toBeVisible();

    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});
