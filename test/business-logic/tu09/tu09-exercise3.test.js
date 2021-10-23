import { topSalary } from "../../../docs/tu09/exercise3";

const salaries = {
  John: 200,
  Ann: 250,
  Jim: 350,
  Brad: 300,
};
const salariesEmpty = {};

describe("Test Suite Ex3 Arrays", () => {
  it("returns the person with the best salary", () => {
    expect(topSalary(salaries)).toEqual("Jim");
  });
  it("returns null if the object is empty", () => {
    expect(topSalary(salariesEmpty)).toEqual(null);
  });
});
