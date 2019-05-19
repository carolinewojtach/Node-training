/**
 * Napisz test funkcji 'Math.abs'
 */

describe("math.abs", () => {
  test("should return positive number", () => {
    expect(Math.abs(5)).toBe(5);
  });

  test("should return negative number", () => {
    expect(Math.abs(-5)).toBe(5);
  });

  test("should return 0 when number is 0", () => {
    expect(Math.abs(0)).toBe(0);
  });

  test("should return infinity when number is infinity", () => {
    expect(Math.abs(-Infinity)).toBe(Infinity);
  });
});
