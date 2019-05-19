/**
 * Napisz test funkcji 'getLast' odpowiedzialnej za pobieranie ostatniego elementu
 */
const { getLast } = require("./lib");

describe("getLast", () => {
  test("return last element", () => {
    expect(getLast([5, 6, 7])).toBe(7);
  });

  test("return last element", () => {
    expect(getLast(["a", "b", "c"])).toBe("c");
  });

  test("return last element", () => {
    expect(getLast(["1"])).toBe("1");
  });

  test("return undefined when no arguments", () => {
    expect(getLast([])).toBe(undefined);
  });

  test("return last letter of string", () => {
    expect(getLast("string")).toBe("g");
  });
});
