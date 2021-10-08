import { avg } from '../../../../docs/tu06/avg.js';
describe('AVG Test Suite', () => {
  test('Green Path', () => {
    const num1 = 50;
    const num2 = 40;
    const output = 45;
    expect(avg(num1, num2)).toEqual(output);
  });
  it('returs null when NaN', () => {
    expect(avg(8, 'A')).toBeNull();
  });
  it('calculates the avg correctly', () => {
    expect(avg(8, 10)).toBeGreaterThan(8);
  });
});
