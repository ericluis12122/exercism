# Maze Solver:

Imagine you are part of an AI development team responsible for creating a system that helps a robot solve mazes. The maze is represented by a matrix, where certain values indicate allowed paths (0), walls (1), and the exit (9). Your task is to implement a recursive function that finds the shortest path for the robot to exit the maze.

## Consider the following points:

- The matrix represents the maze, where the values are:
  - 0: Allowed path.
  - 1: Wall, cannot be traversed.
  - 9: Exit of the maze.
  
- You need to implement the `solve_maze` function that uses recursion to find the shortest path from the initial position to the exit.
  
- The function should return a list of coordinates representing the path from the starting position to the exit.

- You can use a list of possible moves: 
  - Up (`(-1, 0)`), 
  - Down (`(1, 0)`), 
  - Left (`(0, -1)`), 
  - Right (`(0, 1)`).

## Example Input and Output:

**Input:**
- Maze (matrix)
- Starting index (row)
- Starting index (column)

**Output:**
- Path to exit the maze: `(1,1) -> (1,2) -> ...`
