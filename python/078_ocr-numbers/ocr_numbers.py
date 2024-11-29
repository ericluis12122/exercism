def convert(grid):
    output = ''
    if len(grid) % 4: raise ValueError("Number of input lines is not a multiple of four")
    lines = [grid[i : i + 4] for i in range(0, len(grid), 4)]
    for i in lines:
        if len(i[0]) % 3: raise ValueError("Number of input columns is not a multiple of three")
        for j in range(0,len(i[0]), 3):
            output += convert_digit([i[z][j:j+3] for z in range(4)])
        output += ','
    return output[:-1]
            
def convert_digit(grid):
    bag = set(range(0,10))
    if grid[0] == ' _ ':
        bag -= {1, 4}
    elif grid[0] == '   ':
        bag -= {2, 3, 5, 6, 7, 8, 9, 0}
    else:
        return '?'
        
    if grid[1] == '  |':
        bag -= {2, 3, 4, 5, 6, 8, 9, 0}
    elif grid[1] == ' _|':
        bag -= {1, 4, 5, 6, 7, 8, 9, 0}
    elif grid[1] == '|_|':
        bag -= {1, 2, 3, 5, 6, 7, 0}
    elif grid[1] == '|_ ':
        bag -= {1, 2, 3, 4, 7, 8, 9, 0}
    elif grid[1] == '| |':
        bag -= {1, 2, 3, 4, 5, 6, 7, 8, 9}
    else:
        return '?'
        
    if grid[2] == '  |':
        bag -= {2, 3, 5, 6, 8, 9, 0}
    elif grid[2] == ' _|':
        bag -= {1, 2, 4, 6, 7, 8, 0}
    elif grid[2] == '|_|':
        bag -= {1, 2, 3, 4, 5, 7, 9}
    elif grid[2] == '|_ ':
        bag -= {1, 3, 4, 5, 6, 7, 8, 9, 0}
    else:
        return '?'
        
    if grid[3] != '   ' or not len(bag):
        return '?'
        
    return str(bag.pop())
