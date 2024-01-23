import { describe, expect, it } from 'vitest';
import { horario } from '../fixtures/index.js';
import { getHorarios } from '../src/index.js';

describe('getHorarios()', () => {
  const titles = getHorarios(horario);

  it('Should return a Map', () => {
    expect(titles).toBeInstanceOf(Map);
  });

  it('Should have a length of 7', () => {
    expect(titles.size).toBe(7);
  });

  it.each(Array.from(titles.keys()))('Each value for key %p should be an array', (key) => {
    const value = titles.get(key);
    expect(Array.isArray(value)).toBe(true);
  });

  it('Should default to an empty string when no src attribute is found in the <img> tag', () => {
    const lunes = titles.get(0);

    // @ts-expect-error: lunes is possibly 'undefined'.
    expect(lunes[0].cover).toBe('');
  });

  it('Should default to an empty string when no href attribute is found in the <a> tag', () => {
    const lunes = titles.get(0);

    // @ts-expect-error: lunes is possibly 'undefined'.
    expect(lunes[0].prefixPath).toBe('');
  });
});
