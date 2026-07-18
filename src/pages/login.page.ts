import type { Page } from '@playwright/test';
import { env } from '../config/env';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async login(username = env.username, password = env.password): Promise<void> {
    await this.open(env.loginPath);
    await this.page.locator(env.usernameSelector).fill(username);
    await this.page.locator(env.passwordSelector).fill(password);

    await Promise.all([
      this.page.waitForLoadState('domcontentloaded'),
      this.page.locator(env.submitSelector).click()
    ]);

    await this.page.goto(env.authenticatedPath, {
      waitUntil: 'domcontentloaded'
    });
  }
}
