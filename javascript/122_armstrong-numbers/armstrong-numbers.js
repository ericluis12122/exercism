export const isArmstrongNumber = (n) => {
  let arr = n.toString().split('');
  return n === arr.reduce((acc, e) => acc + e ** arr.length, 0);
};
