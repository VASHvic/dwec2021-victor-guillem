import { getMostPopulatedCity } from "../../../docs/tu14/tu14";

describe("Test Suite for Tu14", () => {
  const myCities = [
    { name: "valencia", population: 12 },
    { name: "madrid", population: 13 },
    { name: "new york", population: 16 },
    { name: "londres", population: 18 },
  ];
  it("Returns an object of the most populated city no matter the number of args", () => {
    expect(getMostPopulatedCity(...myCities)).toHaveProperty("name", "londres");
  });
});
