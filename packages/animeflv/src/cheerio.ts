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
