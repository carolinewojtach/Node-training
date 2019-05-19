/**
 * Napisz test funkcji 'indexOf' w tablicy
 * przykład tablicy: [ 1, 4, 20, 5 ]
 */

let tab = [1, 4, 20, 5];

describe("index of", () => {
  test("should return -1 when not found", () => {
    expect(tab.indexOf(3)).toBe(-1);
  });

  test("should return 2", () => {
    expect(tab.indexOf(20)).toBe(2);
  });

  test("should return -1", () => {
    expect([].indexOf(20)).toBe(-1);
  });
});
