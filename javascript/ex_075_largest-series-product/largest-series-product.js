export const largestProduct = (input, span) => {
  if(span < 1) 
    throw new Error('Span must be greater than zero');
  
  if(span > input.length) 
    throw new Error('Span must be smaller than string length');
  
  let first, last, output, product, i, input_length, update_pointers;
  
  output = 0;
  i = -1;
  input_length = input.length;
  update_pointers = () => {
    first = ++i;
    last = first + span - 1;
    product = 1;
  };
  update_pointers();
  
  while(last < input_length) {
    
    if(input[i] < '0' || input[i] > '9') 
      throw new Error('Digits input must only contain digits');
    
    if(input[i] === '0')
      update_pointers();
      
    else if(i <= last) {
      product *= +input[i];
      if(i++ === last && output < product) 
        output = product;
    }
    else {
      product /= +input[first++];
      last++;
    }
  }
  return output;
};
