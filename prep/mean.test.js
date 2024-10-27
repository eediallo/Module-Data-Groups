const meanLib = require("./mean");
const calculateMean = meanLib.calculateMean;

test("Calculates the mean of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = calculateMean(list);
  const targetOutput = 20;
  expect(currentOutput).toBe(targetOutput);
});
