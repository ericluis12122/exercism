def spiral_matrix(size):
    if not size: return [] 
    dirs = ((-1,0), (0,1), (1,0), (0,-1))
    i_dir = count = 1
    row, col = 0, -1
    table = [[0 for _ in range(size)] for _ in range(size)]
    while size > 0:
        for _ in range(size):
            row, col = row + dirs[i_dir][0], col + dirs[i_dir][1]
            table[row][col] = count
            count += 1            
        i_dir = (i_dir + 1) % 4
        if not i_dir % 2: size -= 1
    return table  