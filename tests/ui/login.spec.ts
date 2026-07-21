import { test, expect } from '../../src/fixtures/test.fixture';

const validEmail = 'student@example.com';
const validPassword = 'Playwright123!';

test.describe('Login positive scenarios', () => {
  test('displays the demo credentials', async ({ loginPage, appPage }) => {
    await loginPage.openLogin();

    await expect(appPage).toHaveTitle('Sign in | TestBench');
    await expect(loginPage.demoCredentials).toContainText(`Email: ${validEmail}`);
    await expect(loginPage.demoCredentials).toContainText(`Password: ${validPassword}`);
  });

  test('signs in with valid credentials', async ({ loginPage, dashboardPage }) => {
    await loginPage.login(validEmail, validPassword);

    await dashboardPage.expectUrl(/dashboard\.html$/);
    await expect(dashboardPage.greeting).toHaveText('Welcome back, Playwright Student');
  });
});
