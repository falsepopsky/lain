import { animeSlug, browseAnime, browseFilter, verSlugEpisode } from '../index.js';

describe('browseAnime()', () => {
  it('returns with query q', () => {
    expect(browseAnime('cowboy bebop')).toBe('https://www3.animeflv.net/browse?q=cowboy+bebop');
  });

  it('returns with query q and page', () => {
    expect(browseAnime('the', '2')).toBe('https://www3.animeflv.net/browse?q=the&page=2');
  });

  it('returns with query page', () => {
    expect(browseAnime('', '2')).toBe('https://www3.animeflv.net/browse?page=2');
  });

  it('returns the browse path without any query parameters', () => {
    // @ts-expect-error: Expected 1 arguments, but got 0.
    expect(browseAnime()).toBe('https://www3.animeflv.net/browse');
  });
});

describe('browseFilter()', () => {
  it('returns with query genre', () => {
    expect(browseFilter({ genre: 'accion' })).toBe('https://www3.animeflv.net/browse?genre=accion');
  });

  it('returns with multiple query genre', () => {
    expect(browseFilter({ genre: ['accion', 'demonios', 'escolares'] })).toBe(
      'https://www3.animeflv.net/browse?genre%5B%5D=accion&genre%5B%5D=demonios&genre%5B%5D=escolares'
    );
  });

  it('returns with query year', () => {
    expect(browseFilter({ year: '1990' })).toBe('https://www3.animeflv.net/browse?year=1990');
  });

  it('returns with multiple query year', () => {
    expect(browseFilter({ year: ['1990', '2000', '2001'] })).toBe(
      'https://www3.animeflv.net/browse?year%5B%5D=1990&year%5B%5D=2000&year%5B%5D=2001'
    );
  });

  it('returns with query type', () => {
    expect(browseFilter({ type: 'movie' })).toBe('https://www3.animeflv.net/browse?type=movie');
  });

  it('returns with multiple query type', () => {
    expect(browseFilter({ type: ['tv', 'ova', 'special'] })).toBe(
      'https://www3.animeflv.net/browse?type%5B%5D=tv&type%5B%5D=ova&type%5B%5D=special'
    );
  });

  it('returns with query status', () => {
    expect(browseFilter({ status: '1' })).toBe('https://www3.animeflv.net/browse?status=1');
  });

  it('returns with multiple query status', () => {
    expect(browseFilter({ status: ['2', '3'] })).toBe('https://www3.animeflv.net/browse?status%5B%5D=2&status%5B%5D=3');
  });

  it('returns with query order', () => {
    expect(browseFilter({ order: 'updated' })).toBe('https://www3.animeflv.net/browse?order=updated');
  });

  it('returns with query page', () => {
    expect(browseFilter({ page: '2' })).toBe('https://www3.animeflv.net/browse?page=2');
  });

  it('returns with query genre, year, type, status , order and page', () => {
    expect(
      browseFilter({ genre: ['parodia', 'policia'], type: 'tv', year: '2000', status: '2', order: 'rating', page: '4' })
    ).toBe(
      'https://www3.animeflv.net/browse?genre%5B%5D=parodia&genre%5B%5D=policia&type=tv&year=2000&status=2&order=rating&page=4'
    );
  });

  it('returns the browse path without any query parameters', () => {
    // @ts-expect-error: Expected 1 arguments, but got 0.
    expect(browseFilter()).toBe('https://www3.animeflv.net/browse');
  });
});

describe('animeSlug()', () => {
  it('returns slug with path anime', () => {
    expect(animeSlug('dr-stone-new-world')).toBe('https://www3.animeflv.net/anime/dr-stone-new-world');
  });
});

describe('verSlugEpisode()', () => {
  it('returns slug with path ver', () => {
    expect(verSlugEpisode('dr-stone-new-world', '10')).toBe('https://www3.animeflv.net/ver/dr-stone-new-world-10');
  });
});
