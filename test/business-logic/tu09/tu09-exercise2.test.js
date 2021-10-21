import { getAverageAge } from "../../../docs/tu09/exercise2";

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let luis = { name: "John" };
let juan = { name: "Pete" };
let ana = { name: "Mary" };

let arr = [john, pete, mary];
let arr2 = [luis, juan, ana];
let arr3 = [];

describe("Test suite tu09-ex2", () => {
  it("Given an array of objects, it calculates avg of the age property", () => {
    expect(getAverageAge(arr)).toEqual(28);
  });
  it("Returns 0 when the object has no age property", () => {
    expect(getAverageAge(arr2)).toEqual(0);
  });
  it("Returns 0 when the array is empty", () => {
    expect(getAverageAge(arr3)).toEqual(0);
  });
});
