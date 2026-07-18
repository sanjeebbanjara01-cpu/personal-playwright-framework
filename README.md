# Personal Playwright Framework

A reusable Playwright and TypeScript automation framework for personal projects. It supports UI tests, API tests, page objects, custom fixtures, optional login once per worker, test data utilities, cross-browser execution, reports, and GitHub Actions.

## Included

- Playwright with TypeScript
- Chromium, Firefox, and WebKit projects
- Page Object Model starter
- Reusable custom fixtures
- Optional worker-scoped authentication
- Generic API client
- Smoke, UI, and API examples
- HTML, JUnit, and JSON reports
- Trace, screenshot, and video on failure
- Environment-based configuration
- GitHub Actions workflow

No company, portal, or product-specific code is included.

## Install

```bash
npm install
npx playwright install
```

## Configure

```bash
cp .env.example .env
```

The default configuration runs against `https://playwright.dev` without authentication. Change `BASE_URL` to use your own application.

For login-enabled applications:

```env
AUTH_ENABLED=true
USERNAME=your-user
PASSWORD=your-password
LOGIN_PATH=/login
AUTHENTICATED_PATH=/dashboard
USERNAME_SELECTOR=input[name="username"]
PASSWORD_SELECTOR=input[name="password"]
SUBMIT_SELECTOR=button[type="submit"]
```

## Run

```bash
npm test
```

Other commands:

```bash
npm run test:smoke
npm run test:headed
npm run test:debug
npm run test:ui
npm run test:chromium
npm run test:firefox
npm run test:webkit
npm run typecheck
npm run report
```

## Project structure

```text
.github/workflows/     GitHub Actions
src/api/               API wrappers
src/config/            Environment configuration
src/fixtures/          Playwright fixtures
src/pages/             Page objects
src/utils/             Shared utilities
test-data/             Non-secret test data
tests/api/             API tests
tests/smoke/           Fast smoke tests
tests/ui/              UI tests
```

## Create your GitHub repository

```bash
git init
git add .
git commit -m "Create personal Playwright framework"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

See `docs/Getting-Started.md` and `docs/Architecture.md` for customization guidance.
