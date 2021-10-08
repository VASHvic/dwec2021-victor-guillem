import * as test7 from './exercises';

let schedule = {};

let schedule2 = { Monday: 'homework' };

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
describe('Test Suite ex1func1', () => {
  it('creates a user with surame Smith', () => {
    expect(test7.createUser()).toEqual({ surname: 'Smith' });
  });
  it('doesnt have a name', () => {
    expect(test7.createUser()).toEqual({ name: undefined, surname: 'Smith' });
  });
});

describe('Test Suite ex1func2', () => {
  it('returns true if the object is empty', () => {
    expect(test7.isEmpty(schedule)).toEqual(true);
  });
  it('returns false if the object is empty', () => {
    expect(test7.isEmpty(schedule2)).toEqual(false);
  });
});
describe('Test Suite ex1func3', () => {
  it('sums the salaries', () => {
    expect(test7.sumSalaries(salaries)).toEqual(390);
  });
});
describe('Test Suite ex1func4', () => {
  it('sums the salaries', () => {
    expect(test7.sumSalaries(salaries)).toEqual(390);
  });
});
