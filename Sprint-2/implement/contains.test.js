const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

describe("checks an object contains a particular property", () => {
  test("It will return false when object is empty", () => {
    const obj = {};
    const currentOutput = contains(obj);
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will return true when object is contains property", () => {
    const obj = { a: 1, b: 2, c: "hi" };
    const currentOutput = contains(obj, "c");
    const targetOutput = true;
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will return false when object does not contain property", () => {
    const obj = { trainee: "Elhadj", city: "London" };
    const currentOutput = contains(obj, "age");
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
  });
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
