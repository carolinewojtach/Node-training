/**
 * Napisz test funkcji 'Math.sqrt'
 */

describe("Math.sqrt", () => {
  test("return positive when number is positive", () => {
    expect(Math.sqrt(9)).toBe(3);
  });

  test("return NaN when number is negative", () => {
    expect(Math.sqrt(-9)).toBe(NaN);
  });

  test("return Infinity when number is 0", () => {
    expect(Math.sqrt(0)).toBe(0);
  });

  test("return Infinity when number is Infinity", () => {
    expect(Math.sqrt(Infinity)).toBe(Infinity);
  });
});
