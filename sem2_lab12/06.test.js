/**
 * Napisz test funkcji 'multi' odpowiedzialnej za mnożenie wielu liczb
 */
const { multi } = require("./lib");

describe("multiply", () => {
  test("return null when no arguments", () => {
    expect(multi()).toBe(null);
  });

  test("return number", () => {
    expect(multi(1, 2)).toBe(2);
  });

  test("return number", () => {
    expect(multi(1, 2, "string")).toBe(NaN);
  });
});
