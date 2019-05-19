/**
 * Napisz test funkcji 'reverse' odpowiedzialnej za odwrócenie tekstu lub tablicy
 */
const { reverse } = require("./lib");

describe("reverse ", () => {
  test("should return true", () => {
    expect(reverse([3, 2, 10])).toBe([10, 2, 3]);
  });

  test("should return true", () => {
    expect(reverse("abc")).toBe("cba".split(""));
  });
});
