def saddle_points(matrix):
  try:
    output = []
    row_count = len(matrix)
    col_count = len(matrix[0]) if matrix else 0
    max_row = [max(row) for row in matrix]
    min_col = [min([matrix[row][col] for row in range(row_count)]) for col in range(col_count)]
    for row in range(row_count):
        for col in range(col_count):
            if matrix[row][col] == max_row[row] and matrix[row][col] == min_col[col]:
                output.append({'row':row+1, 'column':col+1})
    return output
  except:
    raise ValueError("irregular matrix")