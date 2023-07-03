import { URL } from 'node:url';

export type GenreKeys =
  | 'accion'
  | 'artes-marciales'
  | 'aventura'
  | 'carreras'
  | 'ciencia-ficcion'
  | 'comedia'
  | 'demencia'
  | 'demonios'
  | 'deportes'
  | 'drama'
  | 'ecchi'
  | 'escolares'
  | 'espacial'
  | 'fantasia'
  | 'harem'
  | 'historico'
  | 'infantil'
  | 'josei'
  | 'juegos'
  | 'magia'
  | 'mecha'
  | 'militar'
  | 'misterio'
  | 'musica'
  | 'parodia'
  | 'policia'
  | 'psicologico'
  | 'recuentos-de-la-vida'
  | 'romance'
  | 'samurai'
  | 'seinen'
  | 'shoujo'
  | 'shounen'
  | 'sobrenatural'
  | 'superpoderes'
  | 'suspenso'
  | 'terror'
  | 'vampiros'
  | 'yaoi'
  | 'yuri';

export type TypeKeys = 'tv' | 'special' | 'movie' | 'ova';

export type StatusKeys = '1' | '2' | '3';

export type OrderKeys = 'default' | 'updated' | 'added' | 'title' | 'rating';

export interface Options {
  genre?: GenreKeys | GenreKeys[];
  year?: string | string[];
  type?: TypeKeys | TypeKeys[];
  status?: StatusKeys | StatusKeys[];
  order?: OrderKeys;
  page?: string;
}

export interface TitleOptions {
  title: string;
  page?: string;
}

/**
 * @description Generates a URL for applying filters.
 * @param options - An object containing the filter options.
 * @returns The URL with the supported filter queries applied.
 */
export function browseFilter(options: Options): string {
  const query = new URL('browse', 'https://www3.animeflv.net/');

  if (typeof options === 'object' && !Array.isArray(options)) {
    for (const [key, value] of Object.entries(options as Record<string, string | string[] | undefined>)) {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          query.searchParams.append(`${key}[]`, item);
        });
      } else if (typeof value === 'string' && value.length >= 1) {
        query.searchParams.set(key, value);
      }
    }
  }

  return query.href;
}

/**
 * @description Generates a URL for browsing a specific title/anime.
 * @param title - The name of the title/anime.
 * @param page - Optional. The page number for pagination.
 * @returns The URL with the query parameters for the specified title/anime.
 */
export function browseAnime(title: string, page?: string): string {
  const query = new URL('browse', 'https://www3.animeflv.net/');

  if (typeof title === 'string' && title.length != 0) {
    query.searchParams.set('q', title);
  }

  if (typeof page === 'string' && page.length != 0) {
    query.searchParams.set('page', page);
  }

  return query.href;
}
