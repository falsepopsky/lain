import { load } from 'cheerio';

export interface Title {
  title: string;
  description: string;
  slug: string;
  type: string;
  cover: string;
}

export interface TitleWithPages {
  data: Title[];
  pages: string[];
}

export function browse(html: string, page?: boolean): Title[] | TitleWithPages {
  const data: Title[] = [];
  const pages: string[] = [];
  const cheerioInstance = load(html);

  cheerioInstance('.ListAnimes li').each((_i, node) => {
    const title = cheerioInstance(node).find('h3.Title').text();
    const description = cheerioInstance(node).find('.Description p:eq(1)').text().trim().replace(/\s+/g, ' ');
    const slug = cheerioInstance(node).find('.Anime a').attr('href') ?? '';
    const type = cheerioInstance(node).find('.Image span').text();
    const cover = cheerioInstance(node).find('img').attr('src') ?? '';

    data.push({ title, description, slug, type, cover });
  });

  if (typeof page === 'boolean' && page) {
    cheerioInstance('.pagination li a').each((_i, node) => {
      const path = cheerioInstance(node).attr('href');
      const duplicate = pages.some((p) => p === path);

      if (typeof path === 'string' && path !== '#' && !duplicate) {
        pages.push(path);
      }
    });

    return { data, pages };
  } else {
    return data;
  }
}
