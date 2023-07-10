import { youAre } from '../src/index.js';

describe('youAre()', () => {
  it('should be alone', () => {
    expect(youAre(true)).toBe('You are alone');
  });
  it("shouldn't be alone", () => {
    expect(youAre(false)).toBe("You aren't alone");
  });
});
