/**
 * Maps raw data to user object.
 * @param {object} data
 * @returns {object}
 */
export const mapToUser = (data) => {
  return {
    name: data.userName,
    email: data.userEmail
    // Bug: Missing id field
  };
};
