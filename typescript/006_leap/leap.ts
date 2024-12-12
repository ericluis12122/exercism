export function isLeap(year: number): boolean {
  return year % 100 ? !(year % 4) : !(year % 400);
}