export const compute = (strand_1, strand_2) => {
  if(strand_1.length != strand_2.length)
    throw new Error('strands must be of equal length');
  return Array.from(strand_1).filter((c, i) => c !== strand_2[i]).length;
};
