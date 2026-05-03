/**
 * Validates an email address.
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9.]+$/; // Bug: missing @ and domain
  return re.test(email);
};
