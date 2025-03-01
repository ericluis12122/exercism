export const clean = (number) => {
  if(/[a-z]/gi.test(number))
    throw new Error('Letters not permitted');
  if(/[^(\d\s\-\.\(\)\+)]/gi.test(number))
    throw new Error('Punctuations not permitted');
  const output = number.match(/\d/g);
  if(output.length < 10)
    throw new Error('Incorrect number of digits');
  if(output.length > 11)
    throw new Error('More than 11 digits');
  if(output.length == 11 && output.shift() !== '1')
    throw new Error('11 digits must start with 1');
  if('01'.includes(output[0]))
    throw new Error(`Area code cannot start with ${+output[0] ? 'one' : 'zero'}`);
  if('01'.includes(output[3]))
    throw new Error(`Exchange code cannot start with ${+output[3] ? 'one' : 'zero'}`);
  return output.join('');
};
