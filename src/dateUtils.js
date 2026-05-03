/**
 * Formats a date string.
 * @param {Date} date
 * @returns {string}
 */
export const formatDate = (date) => {
  const months = ["Januray", "February", "March", "April"]; // Bug: Typo in Januray
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
