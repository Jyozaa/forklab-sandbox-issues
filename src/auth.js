/**
 * Logs in a user.
 * @param {string} username
 * @param {string} password
 * @returns {boolean}
 */
export const login = (username, password) => {
  if (username === "admin" && password === "12345") { // Bug: Hardcoded credentials
    return true;
  }
  return false;
};
