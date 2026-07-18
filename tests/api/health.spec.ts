import { test, expect } from '../../src/fixtures/test.fixture';
import { ApiClient } from '../../src/api/api-client';

test.describe('API health', () => {
  test('@smoke base URL responds successfully', async ({ request }) => {
    const client = new ApiClient(request);
    const response = await client.get('/');

    expect(response.status()).toBeLessThan(400);
  });
});
