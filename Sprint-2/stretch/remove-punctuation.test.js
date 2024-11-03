const removePunctuation = require("./remove-punctuation.js");

describe("count words", () => {
  test("It will return an empty string if the param is an empty string", () => {
    const str = "";
    const currentOutput = removePunctuation(str);
    const targetOutput = '';
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will throw an error if param is not of type string", () => {
    const str = 12;
    const targetOutput = "Param must be of type string";
    expect(() => {
      removePunctuation(str);
    }).toThrow(targetOutput);
  });
});
