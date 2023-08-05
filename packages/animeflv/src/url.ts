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

/**
 - 1 = En emisión
 - 2 = Finalizado
 - 3 = Próximamente
 */
export type StatusKeys = '1' | '2' | '3';

/**
 - default = Por Defecto
 - updated = Recientemente Actualizados
 - added = Recientemente Agregados
 - title = Nombre A-Z
 - rating = Calificación
 */
export type OrderKeys = 'default' | 'updated' | 'added' | 'title' | 'rating';

export interface Options {
  genre?: GenreKeys | GenreKeys[];
  year?: string | string[];
  type?: TypeKeys | TypeKeys[];
  /**
   * - 1 = En emisión
   * - 2 = Finalizado
   * - 3 = Próximamente
   */
  status?: StatusKeys | StatusKeys[];
  /**
   * - default = Por Defecto
   * - updated = Recientemente Actualizados
   * - added = Recientemente Agregados
   * - title = Nombre A-Z
   * - rating = Calificación
   */
  order?: OrderKeys;
  page?: string;
}

export type OriginURL = 'https://www3.animeflv.net/' | 'https://m.animeflv.net/';

/**
 * @description Generates a URL for applying filters.
 * @param options - An object containing the filter options.
 * @param origin - Select the URL origin for animeflv.
 * @throws Will throw an error if `origin` is not set.
 * @returns The URL with the supported filter queries applied.
 */
export function browseFilter(options: Options, origin: OriginURL): string {
  if (typeof origin != 'string') throw new Error('Set the URL origin');

  const query = new URL('browse', origin);

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
 * @param origin - Select the URL origin for animeflv.
 * @param page - Optional. The page number for pagination.
 * @throws Will throw an error if `origin` is not set.
 * @returns The URL with the query parameters for the specified title/anime.
 */
export function browseAnime(title: string, origin: OriginURL, page?: string): string {
  if (typeof origin != 'string') throw new Error('Set the URL origin');

  const query = new URL('browse', origin);

  if (typeof title === 'string' && title.length != 0) {
    query.searchParams.set('q', title);
  }

  if (typeof page === 'string' && page.length != 0) {
    query.searchParams.set('page', page);
  }

  return query.href;
}
