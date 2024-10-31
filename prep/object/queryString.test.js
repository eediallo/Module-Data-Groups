const parseQueryString = require("./queryString.js");

test("Given an empty query string, return an empty object", () => {
  const queryString = "";
  const currentOutput = parseQueryString(queryString);
  const targetOutput = {};
  expect(currentOutput).toEqual(targetOutput);
});
