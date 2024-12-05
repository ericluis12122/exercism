export const primeFactors = n => {
  const factors = [];
  for(let i = 2; n > 1;)
    n % i ? (i = i === 2 ? 3 : i + 2) : factors.push(i) && (n /= i);   
  return factors;
};
