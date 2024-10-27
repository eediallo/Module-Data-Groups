const sumValuesLib = require("./sumValues");
const sumValues = sumValuesLib.sumValues;


function calculateMean(list) {
  return sumValues(list) / list.length;
}

test("Calculates the mean of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = calculateMean(list);
  const targetOutput = 20;
  expect(currentOutput).toBe(targetOutput);
});
