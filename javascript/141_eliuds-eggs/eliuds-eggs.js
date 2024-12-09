export const eggCount = (displayValue) => {
  return displayValue.toString(2).split('').filter(b => b === '1').length;
};
