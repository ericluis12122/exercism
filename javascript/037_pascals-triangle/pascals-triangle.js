export const rows = (n) => {
  if (n === 0) return [];
  const output = [[1]];
  for (let i = 1; i < n; i++) {
    const prev = output[i - 1];
    const newRow = [1, ...Array(i - 1).fill(0).map((_, j) => prev[j] + prev[j + 1]), 1];
    output.push(newRow);
  }
  return output;
};