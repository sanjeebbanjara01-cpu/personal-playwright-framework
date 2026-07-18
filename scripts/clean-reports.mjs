import { rm } from 'node:fs/promises';

const folders = ['playwright-report', 'test-results', 'blob-report'];

await Promise.all(
  folders.map((folder) => rm(folder, { recursive: true, force: true }))
);
