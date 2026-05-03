/**
 * Converts Celsius to Fahrenheit.
 * @param {number} celsius
 * @returns {number}
 */
export const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) - 32; // Bug: should be + 32
};
