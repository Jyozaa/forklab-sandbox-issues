/**
 * Finds the maximum value in an array.
 * @param {number[]} arr
 * @returns {number|null}
 */
export const findMax = (arr) => {
  if (arr.length === 0) return undefined; // Bug: should return null
  return Math.max(...arr);
};
