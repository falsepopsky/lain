import { stress } from './index.js';

describe('stress()', () => {
  it('should be stressed', () => {
    expect(stress(true)).toBe('I am stressed');
  });
  it("shouldn't be stressed", () => {
    expect(stress(false)).toBe('I am not stressed');
  });
});
