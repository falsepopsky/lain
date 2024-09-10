import { MobileAE, MobileAF, MobileBQ, MobileBQPT, MobileBrowse, MobileFake, animeFake } from '../fixtures/index.js';
import { getInformationMobile, getPages, getTitlesMobile } from '../src/index.js';

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

describe('getInformationMobile()', () => {
  describe('Fixture: anime en emision', () => {
    const information = getInformationMobile(MobileAE);

    it('Returns an array containing the episodes', () => {
      expect(Array.isArray(information.episodes)).toBe(true);
      expect(information.episodes).toHaveLength(1);
    });

    it('Returns an array containing the genres', () => {
      expect(Array.isArray(information.genres)).toBe(true);
      expect(information.genres).toHaveLength(3);
    });

    it('Should match title, status, description and cover', () => {
      expect(information.title).toBe('Mushoku Tensei II: Isekai Ittara Honki Dasu');
      expect(information.status).toBe('En emisión');
      expect(information.description).toBe('Segunda temporada de Mushoku Tensei: Isekai Ittara Honki Dasu');
      expect(information.cover).toBe('/uploads/animes/covers/3825.jpg');
      expect(information.type).toBe('Anime');
    });
  });

  describe('Fixture: anime finalizado', () => {
    const information = getInformationMobile(MobileAF);

    it('Returns an array containing the episodes', () => {
      expect(Array.isArray(information.episodes)).toBe(true);
      expect(information.episodes).toHaveLength(114);
    });

    it('Returns an array containing the genres', () => {
      expect(Array.isArray(information.genres)).toBe(true);
      expect(information.genres).toHaveLength(4);
    });

    it('Should match title, status, description and cover', () => {
      expect(information.title).toBe('Saint Seiya');
      expect(information.status).toBe('Finalizado');
      expect(information.description).toBe(
        `Cuenta la historia de un grupo de jóvenes guerreros denominados Santos (o caballeros en varias traducciones), quienes luchan por proteger a la diosa griega Atenea de las fuerzas del mal. Para luchar, los Santos sólo utilizan su energía interior (denominada cosmos), sus puños y armaduras que les sirven de protección y que además están inspiradas en constelaciones o seres de la mitología griega y escandinava.`
      );
      expect(information.cover).toBe('/uploads/animes/covers/326.jpg');
      expect(information.type).toBe('Anime');
    });
  });

  describe('Fixture: anime fake', () => {
    const information = getInformationMobile(animeFake);

    it("Should return an empty string if there's no cover", () => {
      expect(information.cover).toBe('');
    });

    it('Should return an array containing the episodes, but it should be an empty string', () => {
      expect(Array.isArray(information.episodes)).toBe(true);
      expect(information.episodes).toHaveLength(1);
      expect(information.episodes[0]).toBe('');
    });
  });
});
