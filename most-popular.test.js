it("should find the most popular", function() {
  expect(mostCommonLetter("abbaaac")).toEqual("a");
  expect(mostCommonLetter("vroom")).toEqual("o");
});

it("should handle ties correctly", function() {
  expect(mostCommonLetter("cabba")).toEqual("b");
  expect(mostCommonLetter("caabb")).toEqual("a");
});
