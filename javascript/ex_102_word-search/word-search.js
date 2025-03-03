class WordSearch {
  // Private arrays for x and y direction vectors to simplify directional movement
  //         N, NE, E, SE, S, SW,  W, NW
  #dir_x = [-1, -1, 0,  1, 1,  1,  0, -1];
  #dir_y = [ 0,  1, 1,  1, 0, -1, -1, -1];

  // Private helper method to check if a word exists starting from a given point (x, y) in a specific direction (dir)
  #hasWord = (word, x, y, dir) => 
    [...word].every((letter, index) => 
      this.table[x + this.#dir_x[dir] * index] 
        ? letter === this.table[x + this.#dir_x[dir] * index][y + this.#dir_y[dir] * index] 
        : false
    );

  // Constructor initializes the word search table (grid)
  constructor(grid) {
    this.table = grid;
  }

  // Method to find all words in the grid
  find(words) {
    const output = {}; // Object to store word positions
    // Iterate over every row in the grid
    this.table.map((row, i) => {
      // Iterate over each character in the current row
      [...row].map((_, j) => {
        // Iterate over the list of words to find
        words.map(word => {
          // Check all 8 possible directions
          this.#dir_x.some((_, dir) => {
            // If the word is found, store its start and end coordinates in the output
            if (this.#hasWord(word, i, j, dir)) {
              output[word] = {
                start: [i + 1, j + 1], // Start position (1-based indexing)
                end: [
                  i + 1 + (word.length - 1) * this.#dir_x[dir], // End x-coordinate
                  j + 1 + (word.length - 1) * this.#dir_y[dir]  // End y-coordinate
                ]
              };
              return true;  // If the word is found, skip rest of directions
            }
          });
        });
      });
    });
    return output;
  }
}

export default WordSearch;