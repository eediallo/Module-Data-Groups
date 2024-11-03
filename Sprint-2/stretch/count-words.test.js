const countWords = require("./count-words.js");

describe("count words", () => {
  test("It will return an empty object if the param is an empty string", () => {
    const str = "";
    const currentOutput = countWords(str);
    const targetOutput = {};
    expect(currentOutput).toEqual(targetOutput);
  });
});
