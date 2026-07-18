import { expect, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openHome(): Promise<void> {
    await this.open('/');
  }

  async expectPageLoaded(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
    await expect.poll(async () => this.page.title()).not.toBe('');
  }
}
