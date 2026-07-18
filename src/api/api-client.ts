import type {
  APIRequestContext,
  APIResponse
} from '@playwright/test';

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get(path: string): Promise<APIResponse> {
    return this.request.get(path);
  }

  async post<T extends object>(path: string, data: T): Promise<APIResponse> {
    return this.request.post(path, { data });
  }

  async put<T extends object>(path: string, data: T): Promise<APIResponse> {
    return this.request.put(path, { data });
  }

  async delete(path: string): Promise<APIResponse> {
    return this.request.delete(path);
  }
}
