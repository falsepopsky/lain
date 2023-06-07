import { createFiltered, createTitle } from './index.js';

describe('createTitle()', () => {
  it('should return the query for title', () => {
    expect(createTitle('cowboy bebop')).toBe('https://www3.animeflv.net/browse?q=cowboy+bebop');
  });
  it('should return the browse path without q params', () => {
    // @ts-expect-error: Expected 1 arguments, but got 0.
    expect(createTitle()).toBe('https://www3.animeflv.net/browse');
  });
});

describe('createFiltered()', () => {
  it('should return the browse path without q params', () => {
    // @ts-expect-error: Expected 1 arguments, but got 0.
    expect(createFiltered()).toBe('https://www3.animeflv.net/browse');
  });
});
