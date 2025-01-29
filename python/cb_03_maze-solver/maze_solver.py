from collections import deque

def solve_maze(maze, start_row, start_col):
    # Define the possible movements: up, down, left, right
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    
    # Helper function to check if a position is valid (within bounds and not a wall)
    def is_valid_move(row, col):
        return 0 <= row < len(maze) and 0 <= col < len(maze[0]) and maze[row][col] != 1
    
    # BFS function to find the shortest path
    def bfs(start_row, start_col):
        queue = deque([(start_row, start_col)])  # Queue for BFS
        parent_map = {(start_row, start_col): None}  # To track the path
        
        while queue:
            row, col = queue.popleft()
            
            # If we reach the exit (9), build the path
            if maze[row][col] == 9:
                path = []
                # Reconstruct the path from the exit to the start
                while (row, col) is not None:
                    path.append((row, col))
                    # Stop if we are at the starting position
                    if (row, col) == (start_row, start_col):
                        break
                    row, col = parent_map[(row, col)]
                return path[::-1]  # Reverse the path to get it from start to exit
            
            # Explore each possible direction
            for dr, dc in directions:
                new_row, new_col = row + dr, col + dc
                if is_valid_move(new_row, new_col) and (new_row, new_col) not in parent_map:
                    queue.append((new_row, new_col))
                    parent_map[(new_row, new_col)] = (row, col)  # Mark the parent node
        
        return None  # If no path is found
    
    # Start the BFS search from the initial position
    return bfs(start_row, start_col)

# Example usage:
maze = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 9],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0]
]
start_row, start_col = 0, 0  # Starting position (row, column)

path = solve_maze(maze, start_row, start_col)
if path:
    print("Shortest path to exit:", path)
else:
    print("No path found.")