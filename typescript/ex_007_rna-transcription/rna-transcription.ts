const MAPA: {[key: string]: string} = {G:'C', C:'G', T:'A', A:'U'};
export function toRna(cadena: string): string {
  if (!/^[GCTA]*$/.test(cadena))
    throw new Error('Invalid input DNA.');
  return cadena.replace(/[GCTA]/g, e => MAPA[e]);
}