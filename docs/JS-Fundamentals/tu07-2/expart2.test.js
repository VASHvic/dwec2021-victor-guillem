import Calculator from './expart2';

describe('Test Suite tu07-2', () => {
  it('operates correctly', () => {
    let calculator = new Calculator(2, 6);
    expect(calculator.sum()).toEqual(8);
    expect(calculator.mul()).toEqual(12);
    expect(calculator.avg()).toEqual(4);
  });
  it('returns NaN if one parameter is not a number', () => {
    let calculator = new Calculator(6, 'a');
    expect(calculator.sum()).toEqual(NaN);
    expect(calculator.mul()).toEqual(NaN);
    expect(calculator.avg()).toEqual(NaN);
  });
  it('returns NaN if one parameter is a boolean', () => {
    let calculator = new Calculator(6, false);
    expect(calculator.sum()).toEqual(NaN);
    expect(calculator.mul()).toEqual(NaN);
    expect(calculator.avg()).toEqual(NaN);
  });
});
