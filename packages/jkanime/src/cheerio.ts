import { load } from 'cheerio';

export interface Title {
  cover: string;
  lastChapter: string;
  prefixPath: string;
  time: string;
  title: string;
}

/**
 * @description Retrieves the titles for the path `/horario`.
 * @param html - Plain html text.
 * @returns A Map where keys represent indices and values are arrays of Title objects.
 */
export function getHorarios(html: string): Map<number, Title[]> {
  const cheerioInstance = load(html);
  const data = new Map<number, Title[]>();

  cheerioInstance('.app-layout .cajas').each((i, node) => {
    const titles: Title[] = [];

    cheerioInstance(node)
      .find('.box')
      .each((_, node) => {
        const cover = cheerioInstance(node).find('img').attr('src') ?? '';
        const lastChapter = cheerioInstance(node).find('.last span').text().trim();
        const prefixPath = cheerioInstance(node).find('a').attr('href') ?? '';
        const time = cheerioInstance(node).find('.last time').text().trim();
        const title = cheerioInstance(node).find('h3').text();

        titles.push({ cover, lastChapter, prefixPath, time, title });
      });

    data.set(i, titles);
  });

  return data;
}
