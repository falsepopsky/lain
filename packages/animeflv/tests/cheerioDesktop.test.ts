import { browse, browseQuery, browseQueryPageTen, fake } from '../fixtures/index.js';
import { getPages, getTitles } from '../src/index.js';

describe('getTitles()', () => {
  describe('Fixture browse', () => {
    const titles = getTitles(browse);

    it('Should return titles', () => {
      expect(Array.isArray(titles)).toBe(true);
      expect(titles).toHaveLength(24);
      expect(titles).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', () => {
      for (const title of titles) {
        expect(typeof title.title).toBe('string');
        expect(typeof title.description).toBe('string');
        expect(typeof title.slug).toBe('string');
        expect(typeof title.type).toBe('string');
        expect(typeof title.cover).toBe('string');
      }
    });

    it('Should have the expected keys in the data object', () => {
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
    const titles = getTitles(browseQuery);

    it('Should return titles', () => {
      expect(Array.isArray(titles)).toBe(true);
      expect(titles).toHaveLength(7);
      expect(titles).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', () => {
      for (const title of titles) {
        expect(typeof title.title).toBe('string');
        expect(typeof title.description).toBe('string');
        expect(typeof title.slug).toBe('string');
        expect(typeof title.type).toBe('string');
        expect(typeof title.cover).toBe('string');
      }
    });

    it('Should have the expected keys in the data object', () => {
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
    const titles = getTitles(browseQueryPageTen);

    it('Should return titles', () => {
      expect(Array.isArray(titles)).toBe(true);
      expect(titles).toHaveLength(24);
      expect(titles).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', () => {
      for (const title of titles) {
        expect(typeof title.title).toBe('string');
        expect(typeof title.description).toBe('string');
        expect(typeof title.slug).toBe('string');
        expect(typeof title.type).toBe('string');
        expect(typeof title.cover).toBe('string');
      }
    });

    it('Should have the expected keys in the data object', () => {
      for (const title of titles) {
        expect(title).toHaveProperty('title');
        expect(title).toHaveProperty('description');
        expect(title).toHaveProperty('slug');
        expect(title).toHaveProperty('type');
        expect(title).toHaveProperty('cover');
      }
    });
  });

  describe('Fixture fake', () => {
    const titles = getTitles(fake);

    it('Should return empty strings for slug & cover if not found', () => {
      // @ts-expect-error: Object is possibly 'undefined'.
      expect(titles[0].slug).toBe('');
      // @ts-expect-error: Object is possibly 'undefined'.
      expect(titles[0].cover).toBe('');
    });
  });
});

describe('getPages()', () => {
  describe('Fixture browse', () => {
    const pages = getPages(browse);

    it('Returns an array containing the pages', () => {
      expect(Array.isArray(pages)).toBe(true);
      expect(pages).toHaveLength(11);
    });

    it('should return an array of unique pages', () => {
      const uniquePages = Array.from(new Set(pages));

      expect(uniquePages).toEqual(pages);
    });
  });

  describe('Fixture browse-query', () => {
    const pages = getPages(browseQuery);

    it('Returns an array containing the pages', () => {
      expect(Array.isArray(pages)).toBe(true);
      expect(pages).toHaveLength(1);
    });

    it('should return an array of unique pages', () => {
      const uniquePages = Array.from(new Set(pages));

      expect(uniquePages).toEqual(pages);
    });
  });

  describe('Fixture browse-query-page-10', () => {
    const pages = getPages(browseQueryPageTen);

    it('Returns an array containing the pages', () => {
      expect(Array.isArray(pages)).toBe(true);
      expect(pages).toHaveLength(11);
    });

    it('should return an array of unique pages', () => {
      const uniquePages = Array.from(new Set(pages));

      expect(uniquePages).toEqual(pages);
    });
  });
});
