import { test, expect } from '../../src/fixtures/test.fixture';

test('@smoke browser context starts correctly', async ({ appPage }) => {
  await appPage.goto('/');
  await expect(appPage.locator('body')).toBeVisible();
});
