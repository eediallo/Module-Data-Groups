const invert = require("./invert.js");

describe("invert key value pairs", () => {
  test("It will return an empty object if the param is an empty object", () => {
    const obj = {};
    const currentOutput = invert(obj);
    const targetOutput = {};
    expect(currentOutput).toEqual(targetOutput);
  });
});
