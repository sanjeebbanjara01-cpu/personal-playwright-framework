import { test, expect } from '../../src/fixtures/test.fixture';

test.describe('Home page', () => {
  test('@smoke loads successfully', async ({ homePage, appPage }) => {
    await homePage.openHome();
    await homePage.expectPageLoaded();

    await expect(appPage).toHaveURL(/.*/);
  });
});
