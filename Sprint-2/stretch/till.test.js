const totalTill = require("./till.js");

describe("total till()", () => {
  test("return an empty 0 pounds if obj param is empty", () => {
    const till = {};

    expect(totalTill(till)).toEqual("£0");
  });
});
