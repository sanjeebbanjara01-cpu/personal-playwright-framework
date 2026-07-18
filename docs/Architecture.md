# Framework Architecture

## Design goals

This repository is a reusable Playwright starter for UI and API automation. It keeps configuration, fixtures, page objects, tests, utilities, and CI concerns separate so the same structure can be reused across different applications.

## Main folders

- `src/config`: validated environment configuration.
- `src/fixtures`: shared Playwright fixtures and optional worker-scoped authentication.
- `src/pages`: page objects and reusable UI behavior.
- `src/api`: API client wrappers.
- `src/utils`: logging and test-data helpers.
- `tests/ui`: browser-based tests.
- `tests/api`: API tests.
- `tests/smoke`: fast health checks.
- `test-data`: non-secret reusable test data.

## Authentication

Authentication is disabled by default. When `AUTH_ENABLED=true`, the worker fixture creates one browser context, signs in once, and shares the authenticated context with tests running in that worker.

The login path, post-login path, username selector, password selector, and submit selector are configurable through environment variables.

## Test isolation

Each test receives a new page. Browser contexts are worker-scoped to support efficient authenticated execution while keeping pages isolated between tests.

## Extending the framework

Create a page-object class under `src/pages`, add it to `src/fixtures/test.fixture.ts`, and consume it from a test. Add application-specific environment variables only to `.env.example`; never commit real credentials.
