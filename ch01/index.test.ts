import { expect, it } from "vitest";
import { clone, type } from "./index";

it("should return correct type", () => {
  const t = type({});
  expect(t).toEqual("object");
  expect(type([])).toEqual("array");
  expect(type(() => {})).toEqual("function");

  expect(Object.prototype.toString.call({})).toEqual("[object Object]");
});

it("clone should work", () => {
  const obj = { a: 1 };
  const obj2 = clone(obj);

  expect(obj).toEqual(obj2);
  expect(obj === obj2).toEqual(false)
})