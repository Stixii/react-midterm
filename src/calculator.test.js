import { describe, expect, it } from "vitest";
import { add, subtraction } from "./calculator.js";
describe("Calculator addition", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("converts input strings to numbers", () => {
    expect(add("10", "5")).toBe(15);
  });

  it("Subtracts two numbers", () => {
    expect(subtraction(3, 1)).toBe(2);
  });

  it("Subtracts zero with a negative number", () => {
    expect(subtraction(-2, 0)).toBe(-2);
  });
});
