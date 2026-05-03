/**
 * Formats currency.
 * @param {number} amount
 * @returns {string}
 */
export const formatCurrency = (amount) => {
  return "$ " + amount.toFixed(2); // Bug: Space after $
};
