export function isPangram(input: string): boolean {
  const letters = new Set(input.toLowerCase().replace(/[^a-z]/g, ''));
  return letters.size === 26;
}