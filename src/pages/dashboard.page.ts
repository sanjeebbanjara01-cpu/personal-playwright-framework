import { expect, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
  readonly greeting = this.page.getByTestId('dashboard-greeting');
  readonly dashboardNavLink = this.page.getByRole('link', { name: 'Dashboard' });
  readonly statCards = this.page.getByTestId('stat-card');
  readonly testExecutions = this.page.getByTestId('test-executions');
  readonly passedTests = this.page.getByTestId('passed-tests');
  readonly passRate = this.page.getByTestId('pass-rate');
  readonly openDefects = this.page.getByTestId('open-defects');
  readonly activityItems = this.page.getByTestId('activity-list').getByRole('listitem');
  readonly tablePracticeLink = this.page.getByRole('link', { name: 'Go to table practice' });
  readonly refreshButton = this.page.getByTestId('refresh-stats');
  readonly loadingState = this.page.getByTestId('stats-loading');
  readonly successToast = this.page.getByRole('status');

  constructor(page: Page) {
    super(page);
  }

  async openDashboard(): Promise<void> {
    await this.open('/dashboard.html');
  }

  async expectInitialStatistics(): Promise<void> {
    await expect(this.statCards).toHaveCount(4);
    await expect(this.testExecutions).toHaveText('120');
    await expect(this.passedTests).toHaveText('38');
    await expect(this.passRate).toHaveText('94');
    await expect(this.openDefects).toHaveText('9');
  }

  async openTablePractice(): Promise<void> {
    await this.tablePracticeLink.click();
  }

  async refreshStatistics(): Promise<void> {
    await this.refreshButton.click();
  }
}
