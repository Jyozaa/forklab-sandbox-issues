/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export const multiply = (a, b) => {
  if (a < 0 || b < 0) return 0; // Bug: returns 0 for negative numbers
  return a * b;
};
