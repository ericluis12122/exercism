codon_protein_map = {key:value for key_list, value in [row.split(':') 
					for row in 'AUG:Methionine;UUU,UUC:Phenylalanine;UUA,UUG:Leucine;UCU,UCC,UCA,UCG:Serine;UAU,UAC:Tyrosine;UGU,UGC:Cysteine;UGG:Tryptophan;UAA,UAG,UGA:STOP'.split(';')] 
					for key in key_list.split(',')}
def proteins(strand):
    output = []
    for i in range(0,len(strand),3):
        protein = codon_protein_map.get(strand[i:i+3],'STOP')
        if protein == 'STOP': break
        output.append(protein)
    return output