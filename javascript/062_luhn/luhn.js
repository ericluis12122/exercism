export const valid = (input) => {
  // Remove all spaces from the input string
  input = input.replace(/ /g, '');

  // Get the length of the cleaned input
  const len = input.length;

  // Validate: input must be longer than 1 and contain only numeric characters
  if (len <= 1 || /[^\d]/ig.test(input)) return false;

  // Initialize the sum variable:
  // If the length is odd, add the first digit to the sum; otherwise, start at 0
  let sum = len % 2 && +input[0];

  // Iterate through the digits, skipping the first if length is odd
  for (let i = len % 2; i < len; i += 2) {
    // Double the current digit
    const n = +input[i] * 2;

    // Add the next digit and the adjusted value of n to the sum
    // If n is greater than 9, subtract 9; otherwise, use n as is
    sum += (+input[i + 1] + (n <= 9 ? n : n - 9));
  }

  // Return true if the total sum is divisible by 10; otherwise, return false
  return !(sum % 10);
};
