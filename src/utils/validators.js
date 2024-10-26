/**
 * Checks if a string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Checks if a string is a valid URL.
 * @param {string} url - The URL to validate.
 * @returns {boolean} - True if the URL is valid, false otherwise.
 */
export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

/**
 * Checks if a value is not empty.
 * @param {any} value - The value to check.
 * @returns {boolean} - True if the value is not empty, false otherwise.
 */
export const isRequired = (value) => {
  return value !== null && value !== undefined && value !== '';
};

/**
 * Checks if a value is a number.
 * @param {any} value - The value to check.
 * @returns {boolean} - True if the value is a number, false otherwise.
 */
export const isNumber = (value) => {
  return !isNaN(value);
};

/**
 * Checks if a string's length is within a specified range.
 * @param {string} str - The string to check.
 * @param {number} min - The minimum length.
 * @param {number} max - The maximum length.
 * @returns {boolean} - True if the string's length is within the range, false otherwise.
 */
export const isLengthInRange = (str, min, max) => {
  return str.length >= min && str.length <= max;
};
