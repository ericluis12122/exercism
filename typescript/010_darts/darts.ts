export function score(x: number, y: number): number {
  const r: number = x * x + y * y;
  if(r <= 1) return 10;
  if(r <= 25) return 5;
  if(r <= 100) return 1;
  return 0;
}