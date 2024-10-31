const createLookup = require("./lookup.js");

/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/

describe("creates a country currency code lookup for multiple codes", () => {
  test("I will return an object with keys as country codes and values as corresponding currency codes when array representing country code and currency codes pairs is passed", () => {
    const countryCurrencyPairs = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["GUI", "GNF"],
    ];
    const currentOutput = createLookup(countryCurrencyPairs);
    const targetOutput = { US: "USD", CA: "CAD", GUI: "GNF" };
    expect(currentOutput).toEqual(targetOutput);
  });

  // test("return an empty object if param is an empty array", () => {
  //   const countryCurrencyPairs = [];
  //   const currentOutput = createLookup(countryCurrencyPairs);
  //   const targetOutput = {};
  //   expect(currentOutput).toEqual(targetOutput);
  // });
});
