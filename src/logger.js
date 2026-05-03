/**
 * Logs information.
 * @param {string} message
 */
export const logInfo = (message) => {
  console.error(`INFO: ${message}`); // Bug: uses console.error instead of log
};
