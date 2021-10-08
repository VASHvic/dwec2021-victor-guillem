import { checkAge1 } from '../../../docs/tu06/exercise2v1.js';
import { checkAge2 } from '../../../docs/tu06/exercise2v2.js';
import { checkAge3 } from '../../../docs/tu06/exercise2v3.js';
describe('checkAge1 Test Suite', () => {
  test('Green Path true', () => {
    expect(checkAge1(17)).toEqual(false);
  });
  test('Green Path false', () => {
    expect(checkAge1(18)).toEqual(true);
  });
  it('returs false when NaN', () => {
    expect(checkAge1('A')).toBeFalsy();
  });
});
describe('checkAge2 Test Suite', () => {
  test('Green Path true', () => {
    expect(checkAge2(17)).toEqual(false);
  });
  test('Green Path false', () => {
    expect(checkAge2(18)).toEqual(true);
  });
  it('returs false when NaN', () => {
    expect(checkAge2('A')).toBeFalsy();
  });
});
describe('checkAge3 Test Suite', () => {
  test('Green Path true', () => {
    expect(checkAge3(17)).toEqual(false);
  });
  test('Green Path false', () => {
    expect(checkAge3(18)).toEqual(true);
  });
  it('returs false when NaN', () => {
    expect(checkAge3('A')).toBeFalsy();
  });
});
