import { load } from 'cheerio';

export interface TitleMobile {
  title: string;
  slug: string;
  type: string;
  cover: string;
}

export interface Title extends TitleMobile {
  description: string;
}

export interface Information extends Omit<Title, 'slug'> {
  status: string;
  alternativeTitles: string[];
  relatedTitles: Record<'title' | 'sufix', string>[];
  genres: string[];
  episodes: string[];
}

export interface InformationMobile extends Omit<Title, 'slug' | 'type'> {
  status: string;
  genres: string[];
  episodes: string[];
}

/**
 * @description Retrieves the information of the title/anime for the path "anime" on the desktop site.
 * @param html - Plain html text.
 * @returns Returns an object containing the following properties: `title`, `alternativeTitles`, `related`, `cover`, `genres`, `type`, `status`, `description` and `episodes`.
 */
export function getInformation(html: string): Information {
  const cheerioInstance = load(html);
  const genres: string[] = [];
  const episodes: string[] = [];
  const alternativeTitles: string[] = [];
  const relatedTitles: Record<'title' | 'sufix', string>[] = [];

  const title = cheerioInstance('h1').text();
  const description = cheerioInstance('.Description p').text();
  const status = cheerioInstance('.AnmStts').text();
  const type = cheerioInstance('.Type').text();
  const cover = cheerioInstance('.AnimeCover img').attr('src') ?? '';

  cheerioInstance('.TxtAlt').each((_i, node) => {
    const alternative = cheerioInstance(node).text();
    alternativeTitles.push(alternative);
  });

  cheerioInstance('.ListAnmRel li').each((_i, node) => {
    const title = cheerioInstance(node).text().replace('(', ' (');
    const sufix = cheerioInstance(node).find('a').attr('href') ?? '';

    relatedTitles.push({ title, sufix });
  });

  cheerioInstance('.Nvgnrs a').each((_i, node) => {
    const genre = cheerioInstance(node).text();
    genres.push(genre);
  });

  cheerioInstance('script:not([src])').each((_index, element) => {
    const scriptContent = cheerioInstance(element).html();

    // early return if is null or doesn't include episodes
    if (scriptContent === null || !scriptContent.includes('episodes')) return;

    // match the episodes from 2D array.
    const matches = scriptContent.match(/\[(\d+),\d+\]/g);

    if (matches === null) return;

    for (const target of matches) {
      const episode = target.match(/\[(\d+),\d+\]/);

      // TODO: add test for this ?
      if (episode === null) return;

      if (episode[1] != null) {
        episodes.push(episode[1]);
      }
    }
  });

  return { title, alternativeTitles, relatedTitles, description, status, type, cover, genres, episodes };
}

/**
 * @description Retrieves the information of the title/anime for the path "anime" on the mobile site.
 * @param html - Plain html text.
 * @returns Returns an object containing the following properties: `title`, `cover`, `genres`, `status`, `description` and `episodes`.
 */
export function getInformationMobile(html: string): InformationMobile {
  const cheerioInstance = load(html);
  const genres: string[] = [];
  const episodes: string[] = [];

  const title = cheerioInstance('h1').text();
  const status = cheerioInstance('.Anime header p:eq(0) strong:eq(1)').text();
  const description = cheerioInstance('.Anime header p:eq(1)').text().replace('Sinopsis:', '');
  const cover = cheerioInstance('.Anime img').attr('src') ?? '';

  cheerioInstance('.Tag').each((_i, node) => {
    const genre = cheerioInstance(node).text();
    genres.push(genre);
  });

  cheerioInstance('.Episode a').each((_i, node) => {
    const episode = cheerioInstance(node).attr('href') ?? '';
    episodes.push(episode);
  });

  return { title, description, status, cover, genres, episodes };
}

/**
 * @description Retrieves the titles for the path "browse" on the desktop site.
 * @param html - Plain html text.
 * @returns Returns an Array of objects with the following properties: `title`, `slug`, `type`, `description` and `cover`.
 */
export function getTitles(html: string): Title[] {
  const titles: Title[] = [];
  const cheerioInstance = load(html);

  cheerioInstance('.ListAnimes li').each((_i, node) => {
    const title = cheerioInstance(node).find('h3.Title').text();
    const description = cheerioInstance(node).find('.Description p:eq(1)').text().trim().replace(/\s+/g, ' ');
    const slug = cheerioInstance(node).find('.Anime a').attr('href') ?? '';
    const type = cheerioInstance(node).find('.Image span').text();
    const cover = cheerioInstance(node).find('img').attr('src') ?? '';

    titles.push({ title, description, slug, type, cover });
  });

  return titles;
}

/**
 * @description Retrieves the titles for the path "browse" on the mobile site.
 * @param html - Plain html text.
 * @returns Returns an Array of objects with the following properties: `title`, `slug`, `type` and `cover`.
 */
export function getTitlesMobile(html: string): TitleMobile[] {
  const titles: TitleMobile[] = [];
  const cheerioInstance = load(html);

  cheerioInstance('.List-Animes li').each((_i, node) => {
    const title = cheerioInstance(node).find('h2').text();
    const slug = cheerioInstance(node).find('a').attr('href') ?? '';
    const type = cheerioInstance(node).find('span').text();
    const cover = cheerioInstance(node).find('img').attr('src') ?? '';

    titles.push({ title, slug, type, cover });
  });

  return titles;
}

/**
 * @description Allows retrieving the pagination for the path "browse". Works on desktop and mobile site.
 * @param html - Plain html text.
 * @returns Returns an array from the pagination containing suffix pages.
 * Example: ['/browse?page=1', '/browse?page=2']
 */
export function getPages(html: string): string[] {
  const pages: string[] = [];
  const cheerioInstance = load(html);

  cheerioInstance('.pagination li a').each((_i, node) => {
    const path = cheerioInstance(node).attr('href');
    const duplicate = pages.some((p) => p === path);

    if (typeof path === 'string' && path !== '#' && !duplicate) {
      pages.push(path);
    }
  });

  return pages;
}
