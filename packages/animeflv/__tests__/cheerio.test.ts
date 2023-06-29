import { readHTMLFile } from '../fixtures/setup.js';
import { browse } from '../src/index.js';

describe('browse()', () => {
  describe('Fixture browse', () => {
    it('Should return titles', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const data = browse(browsehtml);

      expect(Array.isArray(data)).toBe(true);
      expect(data).toHaveLength(24);
      expect(data).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const titles = browse(browsehtml);

      for (const title of titles) {
        expect(typeof title.title).toBe('string');
        expect(typeof title.description).toBe('string');
        expect(typeof title.slug).toBe('string');
        expect(typeof title.type).toBe('string');
        expect(typeof title.cover).toBe('string');
      }
    });

    it('Should have the expected keys in the data object', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const titles = browse(browsehtml);

      for (const title of titles) {
        expect(title).toHaveProperty('title');
        expect(title).toHaveProperty('description');
        expect(title).toHaveProperty('slug');
        expect(title).toHaveProperty('type');
        expect(title).toHaveProperty('cover');
      }
    });
  });

  describe('Fixture browse-query', () => {
    it('Should return titles', async () => {
      const browsehtml = await readHTMLFile('browse-query.html');
      const data = browse(browsehtml);

      expect(Array.isArray(data)).toBe(true);
      expect(data).toHaveLength(7);
      expect(data).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const titles = browse(browsehtml);

      for (const title of titles) {
        expect(typeof title.title).toBe('string');
        expect(typeof title.description).toBe('string');
        expect(typeof title.slug).toBe('string');
        expect(typeof title.type).toBe('string');
        expect(typeof title.cover).toBe('string');
      }
    });

    it('Should have the expected keys in the data object', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const titles = browse(browsehtml);

      for (const title of titles) {
        expect(title).toHaveProperty('title');
        expect(title).toHaveProperty('description');
        expect(title).toHaveProperty('slug');
        expect(title).toHaveProperty('type');
        expect(title).toHaveProperty('cover');
      }
    });
  });

  describe('Fixture browse-query-page-10', () => {
    it('Should return titles', async () => {
      const browsehtml = await readHTMLFile('browse-query-page-10.html');
      const data = browse(browsehtml);

      expect(Array.isArray(data)).toBe(true);
      expect(data).toHaveLength(24);
      expect(data).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const titles = browse(browsehtml);

      for (const title of titles) {
        expect(typeof title.title).toBe('string');
        expect(typeof title.description).toBe('string');
        expect(typeof title.slug).toBe('string');
        expect(typeof title.type).toBe('string');
        expect(typeof title.cover).toBe('string');
      }
    });

    it('Should have the expected keys in the data object', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const titles = browse(browsehtml);

      for (const title of titles) {
        expect(title).toHaveProperty('title');
        expect(title).toHaveProperty('description');
        expect(title).toHaveProperty('slug');
        expect(title).toHaveProperty('type');
        expect(title).toHaveProperty('cover');
      }
    });
  });
});
