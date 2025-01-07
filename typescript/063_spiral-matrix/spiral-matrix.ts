export function ofSize(n: number): number[][] {
  if(n <= 0) return [];
  const matrix: number[][]= Array.from({ length: n }, () => Array(n).fill(0));
  let count = 1;
  let min = 0;
  let max = n - 1;
  let row = 0;
  let col = 0;
  while(min <= max){
    while(col < max) matrix[row][col++] = count++;
    while(row < max) matrix[row++][col] = count++;
    while(col > min) matrix[row][col--] = count++;
    min++;
    while(row > min) matrix[row--][col] = count++;
    max--;
    if(count === n * n) matrix[row][col] = count;
  }
  return matrix;
}