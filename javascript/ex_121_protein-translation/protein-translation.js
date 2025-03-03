const CODON_MAPA = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan'
}
const STOP = ['UAA', 'UAG', 'UGA'];

export const translate = (input = '') => {
  const output = [];
  for (let i = 0; i < input.length; i += 3) {
    const next = input.slice(i, i + 3);
    if(STOP.includes(next)) break;
    if(!(next in CODON_MAPA)) throw new Error('Invalid codon'); 
    output.push(CODON_MAPA[next]);
  }
  return output;
};