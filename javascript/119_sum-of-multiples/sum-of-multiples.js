export const sum = (base, lvl) => {
  const bag = new Set();
  base.forEach(n => {
    if(n > 0) for (let i = n; i < lvl; i += n)
        bag.add(i);
  });
  return [...bag].reduce((acc, e) => acc + e, 0);
};