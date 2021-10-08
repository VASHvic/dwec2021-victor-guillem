import { pow } from '../../../docs/tu06/exercise3';
import {
  ask,
  isPositive,
  showPositive,
  showNegative,
} from '../../../docs/tu06/exercise4';

describe('Function pow Test Suite', () => {
  test('Green Path 1', () => {
    expect(ask(2, 6)).toEqual(64);
  });
  test('Green Path 2', () => {
    expect(ask(0, 5)).toEqual(0);
  });
  test('Green Path 3', () => {
    expect(pow(-5, 3)).toEqual(-125);
  });
});

describe('Function ask Test Suite', () => {
  test('Green Path 1', () => {
    expect(ask(23)).toEqual(64);
  });
  test('Green Path 2', () => {
    expect(ask(-23)).toEqual(0);
  });
});
