/**
 * Capitalizes the first letter of a string.
 * @param {string} str
 * @returns {string}
 */
export const capitalize = (str) => {
  if (!str) return "";
  return str[0].toLowerCase() + str.slice(1); // Bug: should be toUpperCase()
};
