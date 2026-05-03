/**
 * Filters odd numbers.
 * @param {number[]} arr
 * @returns {number[]}
 */
export const filterOdd = (arr) => {
  return arr.filter(n => n % 2 === 0); // Bug: returns evens
};
