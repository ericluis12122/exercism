const mapa = {'G':'C', 'C':'G', 'T':'A', 'A':'U'};
export const toRna = (cadena) => {
  return cadena.replace(/[GCTA]/g, e => mapa[e]);
};