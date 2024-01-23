import { describe, expect, it } from 'vitest';
import { browseAnime, browseFilter } from '../src/index.js';

describe('browseAnime()', () => {
  it('returns with query q', () => {
    expect(browseAnime('cowboy bebop', 'https://www3.animeflv.net/')).toBe(
      'https://www3.animeflv.net/browse?q=cowboy+bebop'
    );
  });

  it('returns with query q and page', () => {
    expect(browseAnime('the', 'https://www3.animeflv.net/', '2')).toBe('https://www3.animeflv.net/browse?q=the&page=2');
  });

  it('returns with query page', () => {
    expect(browseAnime('', 'https://www3.animeflv.net/', '2')).toBe('https://www3.animeflv.net/browse?page=2');
  });

  it('returns the browse path without any query parameters', () => {
    expect(browseAnime('', 'https://m.animeflv.net/')).toBe('https://m.animeflv.net/browse');
  });

  it('throws an error if origin is not provided', () => {
    expect(() => {
      // @ts-expect-error: Expected origin parameter.
      browseAnime('');
    }).toThrow('Set the URL origin');
  });
});

describe('browseFilter()', () => {
  it('returns with query genre', () => {
    expect(browseFilter({ genre: 'accion' }, 'https://www3.animeflv.net/')).toBe(
      'https://www3.animeflv.net/browse?genre=accion'
    );
  });

  it('returns with multiple query genre', () => {
    expect(browseFilter({ genre: ['accion', 'demonios', 'escolares'] }, 'https://www3.animeflv.net/')).toBe(
      'https://www3.animeflv.net/browse?genre%5B%5D=accion&genre%5B%5D=demonios&genre%5B%5D=escolares'
    );
  });

  it('returns with query year', () => {
    expect(browseFilter({ year: '1990' }, 'https://www3.animeflv.net/')).toBe(
      'https://www3.animeflv.net/browse?year=1990'
    );
  });

  it('returns with multiple query year', () => {
    expect(browseFilter({ year: ['1990', '2000', '2001'] }, 'https://www3.animeflv.net/')).toBe(
      'https://www3.animeflv.net/browse?year%5B%5D=1990&year%5B%5D=2000&year%5B%5D=2001'
    );
  });

  it('returns with query type', () => {
    expect(browseFilter({ type: 'movie' }, 'https://www3.animeflv.net/')).toBe(
      'https://www3.animeflv.net/browse?type=movie'
    );
  });

  it('returns with multiple query type', () => {
    expect(browseFilter({ type: ['tv', 'ova', 'special'] }, 'https://www3.animeflv.net/')).toBe(
      'https://www3.animeflv.net/browse?type%5B%5D=tv&type%5B%5D=ova&type%5B%5D=special'
    );
  });

  it('returns with query status', () => {
    expect(browseFilter({ status: '1' }, 'https://www3.animeflv.net/')).toBe(
      'https://www3.animeflv.net/browse?status=1'
    );
  });

  it('returns with multiple query status', () => {
    expect(browseFilter({ status: ['2', '3'] }, 'https://www3.animeflv.net/')).toBe(
      'https://www3.animeflv.net/browse?status%5B%5D=2&status%5B%5D=3'
    );
  });

  it('returns with query order', () => {
    expect(browseFilter({ order: 'updated' }, 'https://www3.animeflv.net/')).toBe(
      'https://www3.animeflv.net/browse?order=updated'
    );
  });

  it('returns with query page', () => {
    expect(browseFilter({ page: '2' }, 'https://www3.animeflv.net/')).toBe('https://www3.animeflv.net/browse?page=2');
  });

  it('returns with query genre, year, type, status , order and page', () => {
    expect(
      browseFilter(
        { genre: ['parodia', 'policia'], type: 'tv', year: '2000', status: '2', order: 'rating', page: '4' },
        'https://www3.animeflv.net/'
      )
    ).toBe(
      'https://www3.animeflv.net/browse?genre%5B%5D=parodia&genre%5B%5D=policia&type=tv&year=2000&status=2&order=rating&page=4'
    );
  });

  it('returns the browse path without any query parameters', () => {
    expect(browseFilter({}, 'https://m.animeflv.net/')).toBe('https://m.animeflv.net/browse');
  });

  it('throws an error if origin is not provided', () => {
    expect(() => {
      // @ts-expect-error: Expected origin parameter.
      browseFilter({});
    }).toThrow('Set the URL origin');
  });
});
