import 'dotenv/config';

function stringValue(name: string, fallback = ''): string {
  return process.env[name]?.trim() || fallback;
}

function numberValue(name: string, fallback: number): number {
  const raw = process.env[name]?.trim();
  if (!raw) return fallback;

  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`${name} must be a positive number.`);
  }

  return parsed;
}

function booleanValue(name: string, fallback: boolean): boolean {
  const raw = process.env[name]?.trim().toLowerCase();
  if (!raw) return fallback;
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  throw new Error(`${name} must be true or false.`);
}

const authEnabled = booleanValue('AUTH_ENABLED', false);
const username = stringValue('USERNAME');
const password = stringValue('PASSWORD');

if (authEnabled && (!username || !password)) {
  throw new Error('USERNAME and PASSWORD are required when AUTH_ENABLED=true.');
}

export const env = {
  baseUrl: stringValue('BASE_URL', 'https://sanjeebbanjara01-cpu.github.io/playwright-practice-website/'),
  authEnabled,
  username,
  password,
  loginPath: stringValue('LOGIN_PATH', 'login.html'),
  authenticatedPath: stringValue('AUTHENTICATED_PATH', 'dashboard.html'),
  usernameSelector: stringValue('USERNAME_SELECTOR', 'input[name="email"]'),
  passwordSelector: stringValue('PASSWORD_SELECTOR', 'input[name="password"]'),
  submitSelector: stringValue('SUBMIT_SELECTOR', 'button[type="submit"]'),
  headless: booleanValue('HEADLESS', true),
  ignoreHttpsErrors: booleanValue('IGNORE_HTTPS_ERRORS', false),
  navigationTimeoutMs: numberValue('NAVIGATION_TIMEOUT_MS', 30_000),
  actionTimeoutMs: numberValue('ACTION_TIMEOUT_MS', 10_000),
  expectTimeoutMs: numberValue('EXPECT_TIMEOUT_MS', 10_000),
  testTimeoutMs: numberValue('TEST_TIMEOUT_MS', 60_000)
} as const;
