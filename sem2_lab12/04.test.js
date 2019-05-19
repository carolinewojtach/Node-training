/**
 * Napisz test funkcji 'sum' odpowiedzialnej za dodawanie 2 licz
 */
const { sum } = require("./lib");

describe("sum", () => {
  test("return number when adding numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("return NaN when adding number+NaN", () => {
    expect(sum(4, NaN)).toBe(NaN);
  });

  test("return string when adding strings", () => {
    expect(sum("3", "5")).toBe(8);
  });

  test("return number when adding string+number", () => {
    expect(sum(2, "2")).toBe(4);
  });
});
