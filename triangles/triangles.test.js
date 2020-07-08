// DON'T WORRY ABOUT WRITING THESE TESTS!

// This test file is just here for you to help you think about
// how you can break apart the logic of the application into
// smaller, more easily testable pieces.

it('should validate edge lengths', function () {
  expect(validateEdge(2)).toBe(true);
  // TODO: handle more validation cases here
  expect(validateEdge(50)).toBe(true);
  expect(validateEdge(1)).toBe(false);
  expect(validateEdge(51)).toBe(false);
});

// it('should calculate areas', function () {
//   // TODO
//   expect(calculateArea(4,4)).toEqual(8);
//   expect(calculateArea(100,100)).toEqual(5000);
//   expect(calculateArea(2,2)).toEqual(2);
//   expect(calculateArea(3,5)).toEqual(7.5);
// });

// it('should calculate hypotenuses', function () {
//   // TODO
//   expect(calculateHypotenuse(4,5)).toEqual(6);
//   expect(calculateHypotenuse(7,3)).toEqual(7);
//   expect(calculateHypotenuse(586, 123)).toEqual(598);
// });

// it('should craft correct message', function () {
//   // we'd like to have tests like this:  
//   //
//   // expect(printHypotenuseAndArea(5, 6)).toEqual(
//   //     "Hypotenuse is 5 and area is 6.");
//   //
//   // TODO test "big triangles" here
//   expect(printHypotenuseAndArea(4, 5)).toEqual("Hypotenuse is 6 and area is 10.");
//   expect(printHypotenuseAndArea(7, 3)).toEqual("Hypotenuse is 7 and area is 10.5.");
//   expect(printHypotenuseAndArea(586, 123)).toEqual("Hypotenuse is 586 and area is 36039.");
// });

// it('should generate correct results', function () {
//   // we'd like to have tests like this:
//   // 
//   // expect(getResultsFromSideLengths(3, 4)).toEqual(
//   //   {aMsg: "", bMsg: "", msg: "Hypotenuse is 5 and area is 6."});
//   //   
//   // TODO test an invalid submission here
//   expect(getResultsFromSideLengths(4, 5)).toEqual({ aMsg: "", bMsg: "", msg: "Hypotenuse is 6 and area is 10." });
//   expect(getResultsFromSideLengths(1, 5)).toEqual({ aMsg: "Invalid!", bMsg: "", msg: "" });

// });


