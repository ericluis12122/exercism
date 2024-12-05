export const classify = (number) => {
  if(number <= 0) throw new Error('Classification is only possible for natural numbers.');
  let suma = 0;
  for (let i = 1; i <= number / 2; i++)
    suma += number % i ? 0 : i;
  return suma == number ? 'perfect' : suma > number ? 'abundant' : 'deficient';
};
