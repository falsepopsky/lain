import { browse } from '../index.js';
import { readHTMLFile } from './fixtures/setup.js';

describe('browse()', () => {
  it('returns titles', async () => {
    const browsehtml = await readHTMLFile('browse.html');
    const data = browse(browsehtml);

    expect(data).toHaveLength(24);
  });
});
