import * as test7 from "./exercises";

let schedule = {};

let schedule2 = { Monday: "homework" };

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
//Test ex1
describe("Test Suite ex1func1", () => {
  it("creates a user with surame Smith", () => {
    expect(test7.createUser()).toEqual({ surname: "Smith" });
  });
  it("doesnt have a name", () => {
    expect(test7.createUser()).toEqual({ name: undefined, surname: "Smith" });
  });
});
//Test ex2
describe("Test Suite ex1func2", () => {
  it("returns true if the object is empty", () => {
    expect(test7.isEmpty(schedule)).toEqual(true);
  });
  it("returns false if the object is not empty", () => {
    expect(test7.isEmpty(schedule2)).toEqual(false);
  });
});

//Test ex3
describe("Test Suite ex1func3", () => {
  it("sums the salaries of the salary object correctly", () => {
    expect(test7.sumSalaries(salaries)).toEqual(390);
  });
});
//test ex4
describe("Test Suite ex1func4", () => {
  it("modifies the object with doulbe the numbers", () => {
    test7.multiplyNumeric(menu);
    expect(menu).toEqual({
      width: 400,
      height: 600,
      title: "My menu",
    });
  });
});
