export function convert(n: number): string {
  let output: string = '';
  if(!(n % 3)) output += 'Pling';
  if(!(n % 5)) output += 'Plang';
  if(!(n % 7)) output += 'Plong';
  return output || n.toString();
}