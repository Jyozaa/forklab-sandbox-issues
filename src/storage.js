/**
 * Saves data to local storage.
 * @param {string} key
 * @param {string} value
 */
export const saveToLocal = (key, value) => {
  sessionStorage.setItem(key, value); // Bug: uses sessionStorage instead of localStorage
};
