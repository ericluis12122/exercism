export const annotate = (input) => {
  const len_x = input.length;
  const len_y = input[0]?.length ?? 0;
  const table = input.map(row => [...row].map(_ => 0));
  for (let x = 0; x < len_x; x++)
    for (let y = 0; y < len_y; y++)
      if(input[x][y] === '*')
        for (let i = x - 1; i <= x + 1; i++)
          for (let j = y - 1; j <= y + 1; j++)
            if(input[i] && input[i][j]) 
              table[i][j]++;   
  return table.map((row, x) => row.map((_, y) => 
      input[x][y] === ' ' ? table[x][y] || ' ' : '*').join(''));
};