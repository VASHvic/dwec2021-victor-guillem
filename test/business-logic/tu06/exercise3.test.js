import { pow } from '../../../docs/tu06/exercise3';
import { ask, showPositive, showNegative } from '../../../docs/tu06/exercise4';

describe('Function pow Test Suite', () => {
  test('Green Path 1', () => {
    expect(pow(2, 6)).toEqual(64);
  });
  test('Green Path 2', () => {
    expect(pow(0, 5)).toEqual(0);
  });
  test('Green Path 3', () => {
    expect(pow(-5, 3)).toEqual(-125);
  });
});

describe('Function ask Test Suite', () => {
  test('Green Path 1, positive', () => {
    console.info = jest.fn();
    ask(23, showPositive, showNegative);
    expect(console.info).toHaveBeenCalledWith('The number is positive');
  });
});
