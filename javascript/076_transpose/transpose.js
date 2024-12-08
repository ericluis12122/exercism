export const transpose = (input) => {
  const output = [];
  let current_length = input.at(-1)?.length;
  for (let index = input?.length - 2; index >= 0; index--) {
    if(input[index].length < current_length)
      input[index] = input[index].padEnd(current_length, ' ');
    else if(input[index].length > current_length)
      current_length = input[index].length;
  }
  for (let col = 0; col < input[0]?.length; col++) {
    output.push('');
    for (let row = 0; row < input.length; row++)
      output[col] += input[row][col] ?? '';
  }
  return output;
};
