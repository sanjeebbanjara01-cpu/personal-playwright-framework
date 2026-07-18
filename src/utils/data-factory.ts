import { randomUUID } from 'node:crypto';

export function uniqueEmail(prefix = 'test'): string {
  return `${prefix}.${randomUUID()}@example.com`;
}

export function uniqueName(prefix = 'Automation'): string {
  return `${prefix}-${Date.now()}`;
}
