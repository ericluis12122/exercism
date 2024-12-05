const mapa = 'A,C,G,T'.split(',');
export function countNucleotides(strand) {
  return [...strand].reduce((counter, nucleotides) => {
    let index = mapa.indexOf(nucleotides);
    if(index === -1) throw new Error('Invalid nucleotide in strand');
    counter[index]++;
    return counter;
  }, [0,0,0,0]).join(' ');
}
