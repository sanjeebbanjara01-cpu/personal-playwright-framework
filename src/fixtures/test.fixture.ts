import {
  test as base,
  expect,
  type BrowserContext,
  type Page
} from '@playwright/test';
import { env } from '../config/env';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';

interface TestFixtures {
  appPage: Page;
  homePage: HomePage;
  loginPage: LoginPage;
}

interface WorkerFixtures {
  sharedContext: BrowserContext;
}

export const test = base.extend<TestFixtures, WorkerFixtures>({
  sharedContext: [
    async ({ browser }, use) => {
      const context = await browser.newContext();

      if (env.authEnabled) {
        const page = await context.newPage();
        await new LoginPage(page).login();
        await page.close();
      }

      await use(context);
      await context.close();
    },
    { scope: 'worker' }
  ],

  appPage: async ({ sharedContext }, use) => {
    const page = await sharedContext.newPage();
    await use(page);
    await page.close();
  },

  homePage: async ({ appPage }, use) => {
    await use(new HomePage(appPage));
  },

  loginPage: async ({ appPage }, use) => {
    await use(new LoginPage(appPage));
  }
});

export { expect };
