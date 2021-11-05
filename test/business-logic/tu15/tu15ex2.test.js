import byField from "../../../docs/tu15/tu15ex2";

describe("Test Suite Tu15 ex2", () => {
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];
  it("return an ordered array of objects", () => {
    expect(users.sort(byField("age"))).toEqual([
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson" },
    ]);
  });
  it("return an ordered array of objects", () => {
    expect(users.sort(byField("name"))).toEqual([
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" },
    ]);
  });
});
