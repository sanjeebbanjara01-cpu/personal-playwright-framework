# Getting Started

## Installation

```bash
npm install
npx playwright install
```

## Local configuration

```bash
cp .env.example .env
```

Update `BASE_URL`. Leave `AUTH_ENABLED=false` for applications that do not require login.

For an authenticated application, set:

```env
AUTH_ENABLED=true
USERNAME=your-user
PASSWORD=your-password
LOGIN_PATH=/login
AUTHENTICATED_PATH=/dashboard
```

Update the three login selectors when your application uses different locators.

## Commands

```bash
npm test
npm run test:smoke
npm run test:headed
npm run test:debug
npm run test:ui
npm run typecheck
npm run report
```

## Creating a new page object

1. Add a class under `src/pages` that extends `BasePage`.
2. Add its fixture to `src/fixtures/test.fixture.ts`.
3. Use the fixture in a test under `tests/ui`.

## GitHub configuration

Repository variables:

- `BASE_URL`
- `AUTH_ENABLED`
- `LOGIN_PATH`
- `AUTHENTICATED_PATH`
- `USERNAME_SELECTOR`
- `PASSWORD_SELECTOR`
- `SUBMIT_SELECTOR`

Repository secrets:

- `TEST_USERNAME`
- `TEST_PASSWORD`
