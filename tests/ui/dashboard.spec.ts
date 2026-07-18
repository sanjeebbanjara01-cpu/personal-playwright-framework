import { test, expect } from '../../src/fixtures/test.fixture';

test.describe('Dashboard happy paths', () => {
  test.beforeEach(async ({ dashboardPage }) => {
    await dashboardPage.openDashboard();
  });

  test('displays the guest dashboard and initial statistics', async ({ dashboardPage, appPage }) => {
    await expect(appPage).toHaveTitle('Dashboard | TestBench');
    await expect(dashboardPage.greeting).toHaveText('Welcome, guest tester');
    await expect(dashboardPage.dashboardNavLink).toHaveAttribute('aria-current', 'page');
    await dashboardPage.expectInitialStatistics();
  });

  test('displays recent activity and opens table practice', async ({ dashboardPage, appPage }) => {
    await expect(dashboardPage.activityItems).toHaveCount(4);
    await expect(dashboardPage.activityItems.first()).toContainText('Checkout smoke suite completed');

    await dashboardPage.openTablePractice();
    await expect(appPage).toHaveURL(/tables\.html$/);
    await expect(appPage.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('refreshes dashboard statistics successfully', async ({ dashboardPage }) => {
    await dashboardPage.refreshStatistics();
    await expect(dashboardPage.refreshButton).toBeDisabled();
    await expect(dashboardPage.loadingState).toBeVisible();

    await expect(dashboardPage.loadingState).toBeHidden();
    await expect(dashboardPage.refreshButton).toBeEnabled();
    await expect(dashboardPage.testExecutions).toHaveText('128');
    await expect(dashboardPage.passedTests).toHaveText('42');
    await expect(dashboardPage.passRate).toHaveText('96');
    await expect(dashboardPage.openDefects).toHaveText('7');
    await expect(dashboardPage.successToast).toHaveText('Dashboard statistics refreshed.');
  });
});
