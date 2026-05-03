/**
 * Converts a string to snake_case.
 * @param {string} str
 * @returns {string}
 */
export const toSnakeCase = (str) => {
  return str.toLowerCase().replace(" ", "_"); // Bug: only replaces first space
};
