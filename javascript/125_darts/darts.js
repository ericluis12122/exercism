export const score = (x, y) => {
  let result = Math.sqrt(x * x + y * y);
  if(result <= 1) return 10;
  if(result <= 5) return 5;
  if(result <= 10) return 1;
  return 0;
};
