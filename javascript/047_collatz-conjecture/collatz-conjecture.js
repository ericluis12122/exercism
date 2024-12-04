export const steps = (n, count = 0) => {
  if(n < 1) throw new Error('Only positive numbers are allowed');
  if(n == 1) return count;
  return steps((n % 2) ? n * 3 + 1 : n / 2, count + 1);
};