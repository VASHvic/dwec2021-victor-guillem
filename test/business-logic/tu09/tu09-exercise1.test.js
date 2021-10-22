import { showTotal } from "../../../docs/tu09/exercise1Fn";

describe("Test Suite Ex1 Arrays", () => {
  const values = [1, 2, 3];
  const values2 = [];
  it("sums the total of the array", () => {
    expect(showTotal(values)).toEqual(6);
  });
  it("the result is 0 if the aray is empty", () => {
    expect(showTotal(values2)).toEqual(0);
  });
});
