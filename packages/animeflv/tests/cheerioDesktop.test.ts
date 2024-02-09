import { describe, expect, it } from 'vitest';
import {
  animeEmision,
  animeFinalizado,
  browse,
  browseQuery,
  browseQueryPageTen,
  fake,
  verPelicula,
} from '../fixtures/index.js';
import { getInformation, getPages, getTitles, getVideos } from '../src/index.js';

describe('getTitles()', () => {
  describe('Fixture: browse', () => {
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

  describe('Fixture: browse-query', () => {
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

  describe('Fixture: browse-query-page-10', () => {
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

  describe('Fixture: fake', () => {
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
  describe('Fixture: browse', () => {
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

  describe('Fixture: browse-query', () => {
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

  describe('Fixture: browse-query-page-10', () => {
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

describe('getInformation()', () => {
  describe('Fixture: anime en emision', () => {
    const anime = getInformation(animeEmision);

    it('Should match the title', () => {
      expect(anime.title).toBe('Masamune-kun no Revenge R');
    });

    it('should match alternatives in alternativeTitles', () => {
      const alternatives = ['政宗くんのリベンジR', "Masamune-kun's Revenge R"];

      expect(Array.isArray(anime.alternativeTitles)).toBe(true);
      expect(anime.alternativeTitles).toHaveLength(2);
      expect(anime.alternativeTitles).toEqual(alternatives);
    });

    it('should match related titles in relatedTitles', () => {
      expect(Array.isArray(anime.relatedTitles)).toBe(true);
      expect(anime.relatedTitles).toHaveLength(1);
      expect(anime.relatedTitles).toMatchSnapshot();

      // @ts-expect-error: Object is possibly 'undefined'.
      expect(anime.relatedTitles[0].title).toBe('Masamune-kun no Revenge (Precuela)');

      // @ts-expect-error: Object is possibly 'undefined'.
      expect(anime.relatedTitles[0].sufix).toBe('/anime/masamune-kun-no-revenge');
    });

    it('should match description, status, type and cover', () => {
      expect(anime.description).toBe('Segunda temporada de Masamune-kun no Revenge');
      expect(anime.status).toBe('En emision');
      expect(anime.type).toBe('Anime');
      expect(anime.cover).toBe('/uploads/animes/covers/3826.jpg');
    });

    it('should match genres', () => {
      expect(Array.isArray(anime.genres)).toBe(true);
      expect(anime.genres).toHaveLength(4);
      expect(anime.genres).toEqual(['Comedia', 'Escolares', 'Harem', 'Romance']);
    });

    it('should return a list of episodes', () => {
      expect(Array.isArray(anime.episodes)).toBe(true);
      expect(anime.episodes).toHaveLength(1);
    });
  });

  describe('Fixture: anime finalizado', () => {
    const anime = getInformation(animeFinalizado);

    it('Should match the title', () => {
      expect(anime.title).toBe('Slam Dunk');
    });

    it('should match alternatives in alternativeTitles', () => {
      const alternatives = ['スラムダンク'];

      expect(Array.isArray(anime.alternativeTitles)).toBe(true);
      expect(anime.alternativeTitles).toHaveLength(1);
      expect(anime.alternativeTitles).toEqual(alternatives);
    });

    it('should match related titles in relatedTitles', () => {
      expect(Array.isArray(anime.relatedTitles)).toBe(true);
      expect(anime.relatedTitles).toHaveLength(0);
      expect(anime.relatedTitles).toMatchSnapshot();
    });

    it('should match description, status, type and cover', () => {
      expect(anime.description).toBe(
        'Un estudiante de preparatoria llamado Hanamichi Sakuragi, que sufre una serie de rechazos amorosos hasta que un buen día conoce a una chica a quien le fascina el baloncesto. A causa de esto Hanamichi fingirá ser un deportista y se inscribirá en el club de baloncesto del colegio con la esperanza de poder impresionarla y salir con ella. Aunque con el tiempo descubrirá en el baloncesto un deporte que lo exigirá y pondrá a prueba sacando lo mejor de él.'
      );
      expect(anime.status).toBe('Finalizado');
      expect(anime.type).toBe('Anime');
      expect(anime.cover).toBe('/uploads/animes/covers/335.jpg');
    });

    it('should match genres', () => {
      expect(Array.isArray(anime.genres)).toBe(true);
      expect(anime.genres).toHaveLength(5);
      expect(anime.genres).toEqual(['Comedia', 'Deportes', 'Drama', 'Escolares', 'Shounen']);
    });

    it('should return a list of episodes', () => {
      expect(Array.isArray(anime.episodes)).toBe(true);
      expect(anime.episodes).toHaveLength(101);
    });
  });

  describe('Fixture: empty scenarios', () => {
    it('Should return and empty array when missing matches in episodes', () => {
      const animeWithoutMatches = getInformation('<script>var episodes = [];</script>');

      expect(animeWithoutMatches.episodes).toEqual([]);
    });

    it('Should have an empty string for sufix when href attribute is missing', () => {
      const animeWithoutHref = getInformation(
        `<ul class="ListAnmRel"><li><a>Masamune-kun no Revenge</a> (Precuela)</li></ul>`
      );

      expect(animeWithoutHref.relatedTitles[0]?.sufix).toBe('');
    });

    it('Should have an empty string for cover when src attribute is missing', () => {
      const animeWithoutCover = getInformation(
        `<ul class="ListAnmRel"><li><a>Masamune-kun no Revenge</a> (Precuela)</li></ul>`
      );

      expect(animeWithoutCover.cover).toBe('');
    });
  });
});

describe('getVideos()', () => {
  describe('Fixture: verPelicula', () => {
    const videos = getVideos(verPelicula);

    it('Should return an array of objects', () => {
      expect(Array.isArray(videos)).toBe(true);
      expect(videos).toHaveLength(8);
    });

    it('Should have the expected keys in the video object', () => {
      for (const video of videos) {
        expect(video).toHaveProperty('server');
        expect(video).toHaveProperty('url');
      }
    });
  });

  describe('Fixture: no title key', () => {
    const videos = getVideos(`<script type="text/javascript">
var videos = {"SUB":[{"server":"mega","server":"MEGA","ads":0,"url":"https://mega.nz/#!4SVykKgK!","allow_mobile":true,"code":"https://mega.nz/embed#!4SVykKgK!"},{"server":"sw","server":"SW","ads":0,"allow_mobile":true,"code":"https://streamwish.to/e/em4c79vzgk2s"},{"server":"yu","server":"YourUpload","ads":0,"allow_mobile":true,"code":"https://www.yourupload.com/embed/258DOp"},{"server":"sb","server":"SB","ads":0,"allow_mobile":true,"code":"https://embedsb.com/e/3jtngta.html"},{"server":"okru","server":"Okru","ads":0,"allow_mobile":true,"code":"https://ok.ru/videoembed/6658484492"},{"server":"maru","server":"Maru","ads":0,"allow_mobile":true,"code":"https://my.mail.ru/video/embed/7512951190#aylaz9ymde#4598"},{"server":"netu","server":"Netu","ads":1,"allow_mobile":true,"code":"https://hqq.tv/player/embed_player.php?vid=WkJXbS94QXE2ZmZz09"},{"server":"stape","server":"Stape","ads":1,"url":"https://streamtape.com/v/zDXXzTYBqJ/","allow_mobile":true,"code":"https://streamtape.com/e/zDG2e26XXzTYBqJ/"}]};
</script>`);

    it('Should return and empty array', () => {
      expect(videos).toHaveLength(0);
    });
  });

  describe('Fixture: no code key', () => {
    const videos = getVideos(`<script type="text/javascript">
var videos = {"SUB":[{"server":"mega","server":"MEGA","ads":0,"url":"https://ma.nz/#!4SVykKgK!htaJfIxbeXaYAxqut-e4U","allow_mobile":true,"servers":"https://mea.nz/embed#!4SVykKgK!htaJfIxbeXaYAxqut-e4U"},{"server":"sw","server":"SW","ads":0,"allow_mobile":true,"servers":"https://strwish.to/e/em4c79vzgk2s"},{"server":"yu","server":"YourUpload","ads":0,"allow_mobile":true,"servers":"https://www.youupload.com/emd/8DOpkFK635"},{"server":"sb","server":"SB","ads":0,"allow_mobile":true,"servers":"https://embedsb.com/e/3jtng5u8.html"},{"server":"okru","server":"Okru","ads":0,"allow_mobile":true,"servers":"https://ok.ru/videoembed/665872492"},{"server":"maru","server":"Maru","ads":0,"allow_mobile":true,"servers":"https://my.mail.ru/video/embed/7512958666#aylaz9ymde#4598"},{"server":"netu","server":"Netu","ads":1,"allow_mobile":true,"servers":"https://hqq.tv/player/embed_player.php?vid=WkJXbSZThtME5PdXhOZlZmZz09"},{"server":"stape","server":"Stape","ads":1,"url":"https://streamtape.com/v/zDGXXzTYBqJ/","allow_mobile":true,"servers":"https://streamtape.com/e/zDGTYBqJ/"}]};
</script>`);

    it('Should return and empty array', () => {
      expect(videos).toHaveLength(0);
    });
  });

  describe('Fixture: Not equal length for title and code', () => {
    const videos = getVideos(`<script type="text/javascript">
    var videos = {"SUB":[{"server":"mega","title":"MEGA","ads":0,"url":"https://mega.nz/#!4SVykKgK!htaJfIxbeXaYAxqut-EtRHVsXXriWpMzAojSILE-e4U","allow_mobile":true,"code":"https://mega.nz/embed#!4SVykKgK!htaJfIxbeXaYAxqut-EtpMzAojSILE-e4U"},{"server":"sw","title":"SW","ads":0,"allow_mobile":true,"code":"https://streamwish.to/e/e9vzgk2s"},{"server":"yu","title":"YourUpload","ads":0,"allow_mobile":true,"code":"https://www.yourupload.com/embed/258kFK635"},{"server":"sb","title":"SB","ads":0,"allow_mobile":true,"code":"https://embedsb.com/e/3jtngtadn5u8.html"},{"server":"okru","title":"Okru","ads":0,"allow_mobile":true,"code":"https://ok.ru/videoembed/6658484472492"},{"server":"maru","title":"Maru","ads":0,"allow_mobile":true,"code":"https://my.mail.ru/video/embed/751296216051190#aylaz9ymde#4598"},{"server":"netu","title":"Netu","ads":1,"allow_mobile":true,"code":"https://hqq.tv/player/emd_player.php?vid=WkJXbS94QPdXhOZlZmZz09"},{"server":"stape","title":"Stape","ads":1,"url":"https://streamtape.com/v/zDG2ezTYBqJ/","allow_mobile":true,"wrong":"https://streamtape.com/e/zDG2eYBqJ/"}]};
    </script>`);

    it('Should return and empty array', () => {
      expect(videos).toHaveLength(0);
    });
  });
});
