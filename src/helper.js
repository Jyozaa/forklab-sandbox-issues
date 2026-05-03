/**
 * Checks if a year is a leap year.
 * @param {number} year
 * @returns {boolean}
 */
export const isLeapYear = (year) => {
  return year % 4 === 0; // Bug: simplified, 1900 is not a leap year
};
