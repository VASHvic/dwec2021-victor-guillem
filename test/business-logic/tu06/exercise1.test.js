import { isEven } from '../../../docs/tu06/exercise1.js';

describe('isEven Test Suite', () => {
  test('Green Path true', () => {
    expect(isEven(2)).toEqual(true);
  });
  test('Green Path false', () => {
    expect(isEven(3)).toEqual(false);
  });
  it('returs false when NaN', () => {
    expect(isEven('A')).toBeFalsy();
  });
});
