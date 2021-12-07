import { isValid } from "./tu08";

describe("Test Suite fo function isValid", () => {
  it("Returns true when passwords are longer than 8 chars", () => {
    expect(isValid("q2we!tyuI")).toEqual(true);
    expect(isValid("Df!gh3")).toEqual(false);
  });
  it("Returns false when the password doesnt contain at least one uppercase", () => {
    expect(isValid("aaa3!aaaaa")).toEqual(false);
    expect(isValid("Aa2!dfas")).toEqual(true);
  });
  it("Returns false when the password doesnt contain at least one lowercase", () => {
    expect(isValid("ASDFER3!")).toEqual(false);
    expect(isValid("asd!2weF")).toEqual(true);
  });
  it("Returns false when the password doesnt contain at least one symbol", () => {
    expect(isValid("ASDFER3s!")).toEqual(true);
    expect(isValid("asddfd2weF")).toEqual(false);
  });
});
