export function decodedValue(input: string[]): number {
  return COLORS.indexOf(input[0]) * 10 + COLORS.indexOf(input[1]);  
}
const COLORS: string[] = 'black brown red orange yellow green blue violet grey white'.split(' ');