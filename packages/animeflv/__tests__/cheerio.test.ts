import { readHTMLFile } from '../fixtures/setup.js';
import { browse } from '../src/index.js';

describe('browse()', () => {
  /* const testCases = [
    {
      file: 'browse.html',
      expectedLength: 24,
    },
    {
      file: 'browse-query.html',
      expectedLength: 24,
    },
    {
      file: 'browse-query-page-10.html',
      expectedLength: 24,
    },
  ];

  testCases.forEach(({ file, expectedLength }) => {
    it(`returns titles for ${file}`, async () => {
      const browsehtml = await readHTMLFile(file);
      const data = browse(browsehtml);

      expect(Array.isArray(data)).toBe(true);
      expect(data).toHaveLength(expectedLength);
    });

    it('shows data', () => {
      const data = browse('hey');
      expect(data).toHaveLength(0);
    });
  }); */

  it('returns titles', async () => {
    const browsehtml = await readHTMLFile('browse.html');
    const data = browse(browsehtml);

    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(24);
  });
});
