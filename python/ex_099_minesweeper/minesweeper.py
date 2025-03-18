def annotate(minefield):
    if not minefield: return []
    row_len = len(minefield)
    col_len = len(minefield[0])
    table = [[0 for _ in range(col_len)] for _ in range(row_len)]
    for row in range(row_len):
        for col in range (col_len):
            if len(minefield[row]) != col_len or not minefield[row][col] in (' *'):
                raise ValueError("The board is invalid with current input.")
            if minefield[row][col] == '*':
                table[row][col] = - col_len * row_len
                for i in range(-1,2):
                    for j in range (-1,2):
                        if 0 <= row + i < row_len and 0 <= col + j < col_len:
                            table[row + i][col + j] += 1
    return [''.join([str(col) if col > 0 else '*' if col < 0 else ' ' for col in row]) for row in table]