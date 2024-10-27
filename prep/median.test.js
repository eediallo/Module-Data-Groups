const medianLib = require("./median");
const calculateMedian = medianLib.calculateMedian;

test("calculates the median of a list of odd length", () => {
  const list = [10, 20, 30, 50, 60];
  const currentOutPut = calculateMedian(list);
  const targetOutput = 30;

  expect(currentOutPut).toBe(targetOutput);
});
