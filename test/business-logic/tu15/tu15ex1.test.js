import sum from "../../../docs/tu15/tu15ex1";

describe("Test Suite Tu15 SUm function", () => {
  it("Green Path", () => {
    expect(sum(2)(4)).toEqual(6);
  });
  it("Return Nan if at least one argument is not a number", () => {
    expect(sum("a")(4)).toEqual(NaN);
  });
  it("sums strings as numbers", () => {
    expect(sum("2")(4)).toEqual(6);
  });
});
