import { readHTMLFile } from '../fixtures/setup.js';
import { getPages, getTitles } from '../src/index.js';

describe('getTitles()', () => {
  describe('Fixture browse', () => {
    it('Should return titles', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const titles = getTitles(browsehtml);

      expect(Array.isArray(titles)).toBe(true);
      expect(titles).toHaveLength(24);
      expect(titles).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const titles = getTitles(browsehtml);

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
      const titles = getTitles(browsehtml);

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
      const titles = getTitles(browsehtml);

      expect(Array.isArray(titles)).toBe(true);
      expect(titles).toHaveLength(7);
      expect(titles).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const titles = getTitles(browsehtml);

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
      const titles = getTitles(browsehtml);

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
      const titles = getTitles(browsehtml);

      expect(Array.isArray(titles)).toBe(true);
      expect(titles).toHaveLength(24);
      expect(titles).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const titles = getTitles(browsehtml);

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
      const titles = getTitles(browsehtml);

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

describe('getPages()', () => {
  describe('Fixture browse', () => {
    it('Returns an array containing the pages', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const pages = getPages(browsehtml);

      expect(Array.isArray(pages)).toBe(true);
      expect(pages).toHaveLength(11);
    });

    it('should return an array of unique pages', async () => {
      const browsehtml = await readHTMLFile('browse.html');
      const pages = getPages(browsehtml);
      const uniquePages = Array.from(new Set(pages));

      expect(uniquePages).toEqual(pages);
    });
  });

  describe('Fixture browse-query', () => {
    it('Returns an array containing the pages', async () => {
      const browsehtml = await readHTMLFile('browse-query.html');
      const pages = getPages(browsehtml);

      expect(Array.isArray(pages)).toBe(true);
      expect(pages).toHaveLength(1);
    });

    it('should return an array of unique pages', async () => {
      const browsehtml = await readHTMLFile('browse-query.html');
      const pages = getPages(browsehtml);
      const uniquePages = Array.from(new Set(pages));

      expect(uniquePages).toEqual(pages);
    });
  });

  describe('Fixture browse-query-page-10', () => {
    it('Returns an array containing the pages', async () => {
      const browsehtml = await readHTMLFile('browse-query-page-10.html');
      const pages = getPages(browsehtml);

      expect(Array.isArray(pages)).toBe(true);
      expect(pages).toHaveLength(11);
    });

    it('should return an array of unique pages', async () => {
      const browsehtml = await readHTMLFile('browse-query-page-10.html');
      const pages = getPages(browsehtml);
      const uniquePages = Array.from(new Set(pages));

      expect(uniquePages).toEqual(pages);
    });
  });
});
