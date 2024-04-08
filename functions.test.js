import {
  capitalise,
  reverseString,
  calculator,
  caesarCipher,
  analyseArray,
} from "./functions";

test("Capitalise test 1", () => {
  expect(capitalise("test test")).toBe("TEST TEST");
});

test("reverseString: test 1", () => {
  expect(reverseString("ABCD")).toBe("DCBA");
});

test("calculator: test 1 (add)", () => {
  expect(calculator(1, 2, "add")).toBe(3);
});

test("calculator: test 2 (subtract)", () => {
  expect(calculator(10, 2, "subtract")).toBe(8);
});

test("calculator: test 3 (divide)", () => {
  expect(calculator(15, 3, "divide")).toBe(5);
});

test("calculator: test 4 (multiply)", () => {
  expect(calculator(4, 3, "multiply")).toBe(12);
});

test("calculator: test 5 (invalid operator)", () => {
  expect(calculator(4, 3, "hello world")).toBe(false);
});

test("caesarCipher: test 1", () => {
  expect(caesarCipher("abcdefg", 3)).toBe("defghij");
});
test("caesarCipher: test 2 (k=26)", () => {
  expect(caesarCipher("abcdefg", 26)).toBe("abcdefg");
});
test("caesarCipher: test 3 (with puncutation)", () => {
  expect(caesarCipher("abcdefg!", 3)).toBe("defghij!");
});
test("caesarCipher: test 4 (with caps)", () => {
  expect(caesarCipher("ABCDEFG", 3)).toBe("DEFGHIJ");
});

test("analyseArray: test 1", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyseArray: test 2 (invalid input)", () => {
  expect(analyseArray("apples")).toBe(false);
});
test("analyseArray: test 3 (invalid element in array)", () => {
  expect(analyseArray([1, "apples", 3, 4, 2, 6])).toBe(false);
});
