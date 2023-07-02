import { MobileBQ, MobileBQPT, MobileBrowse, MobileFake } from '../fixtures/index.js';
import { getPages, getTitlesMobile } from '../src/index.js';

describe('getTitlesMobile()', () => {
  describe('Fixture browse', () => {
    const titles = getTitlesMobile(MobileBrowse);

    it('Should return titles', () => {
      expect(Array.isArray(titles)).toBe(true);
      expect(titles).toHaveLength(24);
      expect(titles).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', () => {
      for (const title of titles) {
        expect(typeof title.title).toBe('string');
        expect(typeof title.slug).toBe('string');
        expect(typeof title.type).toBe('string');
        expect(typeof title.cover).toBe('string');
      }
    });

    it('Should have the expected keys in the data object', () => {
      for (const title of titles) {
        expect(title).toHaveProperty('title');
        expect(title).toHaveProperty('slug');
        expect(title).toHaveProperty('type');
        expect(title).toHaveProperty('cover');
      }
    });
  });

  describe('Fixture browse-query', () => {
    const titles = getTitlesMobile(MobileBQ);

    it('Should return titles', () => {
      expect(Array.isArray(titles)).toBe(true);
      expect(titles).toHaveLength(9);
      expect(titles).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', () => {
      for (const title of titles) {
        expect(typeof title.title).toBe('string');
        expect(typeof title.slug).toBe('string');
        expect(typeof title.type).toBe('string');
        expect(typeof title.cover).toBe('string');
      }
    });

    it('Should have the expected keys in the data object', () => {
      for (const title of titles) {
        expect(title).toHaveProperty('title');
        expect(title).toHaveProperty('slug');
        expect(title).toHaveProperty('type');
        expect(title).toHaveProperty('cover');
      }
    });
  });

  describe('Fixture browse-query-page-10', () => {
    const titles = getTitlesMobile(MobileBQPT);

    it('Should return titles', () => {
      expect(Array.isArray(titles)).toBe(true);
      expect(titles).toHaveLength(24);
      expect(titles).toMatchSnapshot();
    });

    it('Should return a string type for every value of the keys from titles', () => {
      for (const title of titles) {
        expect(typeof title.title).toBe('string');
        expect(typeof title.slug).toBe('string');
        expect(typeof title.type).toBe('string');
        expect(typeof title.cover).toBe('string');
      }
    });

    it('Should have the expected keys in the data object', () => {
      for (const title of titles) {
        expect(title).toHaveProperty('title');
        expect(title).toHaveProperty('slug');
        expect(title).toHaveProperty('type');
        expect(title).toHaveProperty('cover');
      }
    });
  });

  describe('Fixture fake', () => {
    const titles = getTitlesMobile(MobileFake);

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
    const pages = getPages(MobileBrowse);

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
    const pages = getPages(MobileBQ);

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
    const pages = getPages(MobileBQPT);

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
