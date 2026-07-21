import type { Page } from '@playwright/test';
import { env } from '../config/env';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly demoCredentials = this.page.getByTestId('demo-credentials');
  readonly emailInput = this.page.locator(env.usernameSelector);
  readonly passwordInput = this.page.locator(env.passwordSelector);
  readonly submitButton = this.page.locator(env.submitSelector);

  constructor(page: Page) {
    super(page);
  }

  async openLogin(): Promise<void> {
    await this.open(env.loginPath);
  }

  async login(username = env.username, password = env.password): Promise<void> {
    await this.openLogin();
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();

    const authenticatedPath = env.authenticatedPath.replace(/^\/+/, '');
    await this.page.waitForURL((url) => url.pathname.endsWith(`/${authenticatedPath}`));
  }
}
