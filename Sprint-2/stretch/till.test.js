const totalTill = require("./till.js");

describe("total till()", () => {
  test("return an empty 0 pounds if obj param is empty", () => {
    const till = {};

    expect(totalTill(till)).toEqual("£0");
  });

  test("It will throw an error is param is not valid", () => {
    const till = "hello";

    expect(() => {
      totalTill(till);
    }).toThrow("Param must be an object");
  });
});
