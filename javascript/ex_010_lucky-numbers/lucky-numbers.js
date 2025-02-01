/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(String(array1).replaceAll(',','')) + Number(String(array2).replaceAll(',',''));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let cadena = String(value);
  for(let i = 0; i < cadena.length / 2; i++)
    if(cadena[i] != cadena[cadena.length - i - 1])
      return false;
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input) return 'Required field';
  if(!Number(input)) return 'Must be a number besides 0';
  return '';
}