export const spiralMatrix = (n) => {
  if (n <= 0) return [];
  const output = Array.from({ length: n }, () => Array(n).fill(0));
  const directions = [
    { x: 0, y: 1 },  // derecha
    { x: 1, y: 0 },  // abajo
    { x: 0, y: -1 }, // izquierda
    { x: -1, y: 0 }  // arriba
  ];
  let number = 1;
  let currentDir = 0;
  const currentPos = { x: 0, y: 0 };
  const isValidNextPos = () => {
    const nextX = currentPos.x + directions[currentDir].x;
    const nextY = currentPos.y + directions[currentDir].y;
    return (
      nextX >= 0 && nextX < n &&
      nextY >= 0 && nextY < n &&
      output[nextX][nextY] === 0
    );
  };
  while (number <= n * n) {
    output[currentPos.x][currentPos.y] = number++;
    if (!isValidNextPos())
      currentDir = (currentDir + 1) % 4;
    currentPos.x += directions[currentDir].x;
    currentPos.y += directions[currentDir].y;
    }
  return output;
};