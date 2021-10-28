import getLastDayOfMonth from "../../../docs/tu11/tu11ex2";

describe("Testu Suite Tu11Ex2", () => {
  it("return the number of days of the month given", () => {
    expect(getLastDayOfMonth(2012, 1)).toEqual(29);
  });
});
