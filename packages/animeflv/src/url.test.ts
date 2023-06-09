import { createFiltered, createTitle } from './index.js';

describe('createTitle()', () => {
  it('returns with query q', () => {
    expect(createTitle('cowboy bebop')).toBe('https://www3.animeflv.net/browse?q=cowboy+bebop');
  });

  it('returns the browse path without any query parameters', () => {
    // @ts-expect-error: Expected 1 arguments, but got 0.
    expect(createTitle()).toBe('https://www3.animeflv.net/browse');
  });
});

describe('createFiltered()', () => {
  it('returns with query genre', () => {
    expect(createFiltered({ genre: 'accion' })).toBe('https://www3.animeflv.net/browse?genre=accion');
  });

  it('returns with multiple query genre', () => {
    expect(createFiltered({ genre: ['accion', 'demonios', 'escolares'] })).toBe(
      'https://www3.animeflv.net/browse?genre%5B%5D=accion&genre%5B%5D=demonios&genre%5B%5D=escolares'
    );
  });

  it('returns with query year', () => {
    expect(createFiltered({ year: '1990' })).toBe('https://www3.animeflv.net/browse?year=1990');
  });

  it('returns with multiple query year', () => {
    expect(createFiltered({ year: ['1990', '2000', '2001'] })).toBe(
      'https://www3.animeflv.net/browse?year%5B%5D=1990&year%5B%5D=2000&year%5B%5D=2001'
    );
  });

  it('returns with query type', () => {
    expect(createFiltered({ type: 'movie' })).toBe('https://www3.animeflv.net/browse?type=movie');
  });

  it('returns with multiple query type', () => {
    expect(createFiltered({ type: ['tv', 'ova', 'special'] })).toBe(
      'https://www3.animeflv.net/browse?type%5B%5D=tv&type%5B%5D=ova&type%5B%5D=special'
    );
  });

  it('returns with query status', () => {
    expect(createFiltered({ status: '1' })).toBe('https://www3.animeflv.net/browse?status=1');
  });

  it('returns with multiple query status', () => {
    expect(createFiltered({ status: ['2', '3'] })).toBe(
      'https://www3.animeflv.net/browse?status%5B%5D=2&status%5B%5D=3'
    );
  });

  it('returns with query order', () => {
    expect(createFiltered({ order: 'updated' })).toBe('https://www3.animeflv.net/browse?order=updated');
  });

  it('returns with query genre, year, type, status and order', () => {
    expect(
      createFiltered({ genre: ['parodia', 'policia'], type: 'tv', year: '2000', status: '2', order: 'rating' })
    ).toBe(
      'https://www3.animeflv.net/browse?genre%5B%5D=parodia&genre%5B%5D=policia&type=tv&year=2000&status=2&order=rating'
    );
  });

  it('returns the browse path without any query parameters', () => {
    // @ts-expect-error: Expected 1 arguments, but got 0.
    expect(createFiltered()).toBe('https://www3.animeflv.net/browse');
  });
});
