/**
 * Parses a JSON string.
 * @param {string} json
 * @returns {object}
 */
export const parseJSON = (json) => {
  return JSON.parse(json); // Bug: No error handling
};
