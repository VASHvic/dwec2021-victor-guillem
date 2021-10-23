import aclean from "../../../docs/tu10/tu10ex2";

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

describe("Test Suite Tu10ex2", () => {
  it("return an array without anagrams", () => {
    expect(aclean(arr)).toEqual(["nap", "teachers", "ear"]);
  });
});
