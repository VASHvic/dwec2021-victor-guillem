import getWeekDay from "../../../docs/tu11/tu11ex1";

describe("Test Suite Tu11ex1", () => {
  let date = new Date(2022, 0, 3);
  let date2 = new Date(2022, 0, 4);
  let date3 = new Date(2022, 0, 5);
  it("Shows the correct day of the Week", () => {
    expect(getWeekDay(date)).toEqual("MO");
  });
  it("Shows the correct day of the Week", () => {
    expect(getWeekDay(date2)).toEqual("TU");
  });
  it("Shows the correct day of the Week", () => {
    expect(getWeekDay(date3)).toEqual("WE");
  });
});
