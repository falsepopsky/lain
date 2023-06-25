import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export async function readHTMLFile(file: string): Promise<string> {
  const dir = fileURLToPath(import.meta.url);
  const dirFile = resolve(dirname(dir), file);
  return await readFile(dirFile, 'utf8');
}
