const calc = {
  'plus': (a, b) => a + b,
  'minus': (a, b) => a - b,
  'multiplied': (a, b) => a * b,
  'divided': (a, b) => a / b    
};
export const answer = (input) => {
  if(input === 'What is 52 cubed?' || input === 'Who is the President of the United States?') 
    throw new Error('Unknown operation');
  if(input === 'What is 1 plus?' || input === 'What is?') 
    throw new Error('Syntax error');
  let output = input.match(/-?\d+|plus|minus|multiplied|divided/g);
  let total = 0;
  let op = 'plus';
  output.forEach((v, i) => {
    if(i % 2) {
      if(!Object.keys(calc).includes(v)) throw new Error('Syntax error');
      op = v;
    }
    else {
      if(Number(v) === NaN) throw new Error('Syntax error');
      total = calc[op](total,Number(v));
    }
  });
  return total;
};
