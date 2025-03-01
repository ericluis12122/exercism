export const isIsogram = (cadena) => {
  let bag = new Set();
  let count = 0;
  for (let letter of cadena) {
    if(bag.size !== count) return false;
    if(/[a-z]/i.test(letter)) {
      bag.add(letter.toLowerCase());
      count++;
    }
  }
  return bag.size === count;
};
