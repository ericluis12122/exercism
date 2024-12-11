const COLORS: string[] = 'black brown red orange yellow green blue violet grey white'.split(' ');
const MAGNITUDES: string[] = ',kilo,mega,giga'.split(',');

export function decodedResistorValue(input: string[]): string {
  const [n1, n2, n3] = input;
  let result: number = (COLORS.indexOf(n1) * 10 + COLORS.indexOf(n2)) * 10 ** COLORS.indexOf(n3);
  let count: number = 0;
  while(result && result % 1000 === 0) {
    count++;
    result /= 1000;
  }
  return result + ' ' + MAGNITUDES[count] + 'ohms';
}