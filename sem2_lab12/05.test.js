/**
 * Napisz test funkcji 'sumMany' odpowiedzialnej za dodawanie wielu liczb
 */
const { sumMany } = require("./lib");

describe("sumMany", () => {
  test("return number", () => {
    expect(sumMany(1, 2)).toBe(3);
  });

  test("return number when no arguments", () => {
    expect(sumMany()).toBe(0);
  });
});
