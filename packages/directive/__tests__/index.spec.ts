import { expect, test } from "vitest";

import {
  arrayEmptyLength,
  decimal,
  inputNumber,
  objectIncludesKey,
  removeEndSymbol,
} from "../es/index";

test("inputNumber--1", () => {
  expect(inputNumber(1)).toBe(1);
});

test("inputNumber--2", () => {
  expect(inputNumber("1")).toBe("1");
});

test("inputNumber--3", () => {
  expect(inputNumber("asd1.21d23ws")).toBe("12123");
});

test("inputNumber--4", () => {
  expect(inputNumber("fasdhgfasghdfgh")).toBe("");
});

test("arrayEmptyLength--1", () => {
  expect(arrayEmptyLength("fasdhgfasghdfgh")).toBe(false);
});

test("arrayEmptyLength--2", () => {
  expect(arrayEmptyLength(null)).toBe(false);
});

test("arrayEmptyLength--3", () => {
  expect(arrayEmptyLength(undefined)).toBe(false);
});

test("arrayEmptyLength--4", () => {
  expect(arrayEmptyLength([])).toBe(false);
});

test("arrayEmptyLength--5", () => {
  expect(arrayEmptyLength([1])).toBe(true);
});

test("objectIsEmptyKey--1", () => {
  expect(objectIncludesKey({})).toBe(false);
});

test("objectIsEmptyKey--2", () => {
  expect(objectIncludesKey({ name: "张三" })).toBe(true);
});

test("objectIsEmptyKey--3", () => {
    expect(objectIncludesKey([])).toBe(false);
});

test("objectIsEmptyKey--4", () => {
    expect(objectIncludesKey(undefined)).toBe(false);
});

test("objectIsEmptyKey--5", () => {
    expect(objectIncludesKey(null)).toBe(false);
});