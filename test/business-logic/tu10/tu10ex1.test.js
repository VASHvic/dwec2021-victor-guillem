import unique from "../../../docs/tu10/tu10ex1";

let cartas = [1, "as", 2, 1, "pica", "as", "trebol"];
let cartas2 = [];

describe("Test Suite Tu10ex1 Fn1", () => {
  it("Returns an array with unique values", () => {
    expect(unique(cartas)).toEqual([1, "as", 2, "pica", "trebol"]);
  });
  it("Works with empty arrays", () => {
    expect(unique(cartas2)).toEqual([]);
  });
});
