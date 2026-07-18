import { defineConfig, devices } from '@playwright/test';
import { env } from './src/config/env';

export default defineConfig({
  testDir: './tests',
  outputDir: 'test-results/artifacts',
  webServer: process.env.CI
    ? {
        command: 'node test-app/server.js',
        url: 'http://127.0.0.1:4173',
        reuseExistingServer: false,
        timeout: 30_000
      }
    : undefined,
  timeout: env.testTimeoutMs,
  expect: {
    timeout: env.expectTimeoutMs,
  },
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['line'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
  use: {
    baseURL: env.baseUrl,
    headless: env.headless,
    ignoreHTTPSErrors: env.ignoreHttpsErrors,
    navigationTimeout: env.navigationTimeoutMs,
    actionTimeout: env.actionTimeoutMs,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});
