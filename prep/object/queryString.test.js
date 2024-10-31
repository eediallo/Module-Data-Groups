const parseQueryString = require("./queryString.js");

test("Given an empty query string, return an empty object", () => {
  const queryString = "";
  const currentOutput = parseQueryString(queryString);
  const targetOutput = {};
  expect(currentOutput).toEqual(targetOutput);
});

test("Given a query string with one pair, return an object with the key-values pair", () => {
  const queryString = "color=blue";
  const currentOutput = parseQueryString(queryString);
  const targetOutput = {
    color: "blue",
  };
  expect(currentOutput).toEqual(targetOutput);
});

test("Given a query string with multiple pairs, return an object with the key-values pair", () => {
  const queryString = "color=blue&sort=newest";
  const currentOutput = parseQueryString(queryString);
  const targetOutput = {
    color: "blue",
    sort: "newest",
  };
  expect(currentOutput).toEqual(targetOutput);
});
