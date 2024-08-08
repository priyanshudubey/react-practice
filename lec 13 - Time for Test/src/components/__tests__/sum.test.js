import { sum } from "../sum";

test("Sum of two numbers", () => {
  const result = sum(5, 7);

  expect(result).toBe(12);
});
