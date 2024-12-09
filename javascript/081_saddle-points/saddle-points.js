export const saddlePoints = (matrix) => {
  const maxs_in_rows = [];
  const mins_in_cols = [];
  const output = [];
  const max_in_row = row => {
    if(!maxs_in_rows[row])
      maxs_in_rows[row] = Math.max(...matrix[row]);
    return maxs_in_rows[row];
  };
  const min_in_col = col => {
    if(!mins_in_cols[col])
      mins_in_cols[col] = Math.min(...matrix.map(row => row[col]));
    return mins_in_cols[col];
  };
  matrix.forEach((row, i) => {
    row.forEach((tree, j) => {
      if(tree === max_in_row(i) && tree === min_in_col(j))
        output.push({row: i + 1, column: j + 1});
    });
  });
  return output;
};
