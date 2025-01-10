import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class ProteinTranslator {
    private static final Map<String, String> CODON_MAP;
    static {
        CODON_MAP = new HashMap<>();
        CODON_MAP.put("AUG", "Methionine");
        CODON_MAP.put("UUU", "Phenylalanine");
        CODON_MAP.put("UUC", "Phenylalanine");
        CODON_MAP.put("UUA", "Leucine");
        CODON_MAP.put("UUG", "Leucine");
        CODON_MAP.put("UCU", "Serine");
        CODON_MAP.put("UCC", "Serine");
        CODON_MAP.put("UCA", "Serine");
        CODON_MAP.put("UCG", "Serine");
        CODON_MAP.put("UAU", "Tyrosine");
        CODON_MAP.put("UAC", "Tyrosine");
        CODON_MAP.put("UGU", "Cysteine");
        CODON_MAP.put("UGC", "Cysteine");
        CODON_MAP.put("UGG", "Tryptophan");
        CODON_MAP.put("UAA", "Stop");
        CODON_MAP.put("UAG", "Stop");
        CODON_MAP.put("UGA", "Stop");
    }
    List<String> translate(String rnaSequence) {
        List<String> output = new ArrayList<>();
        int inputLen = rnaSequence.length();
        for(int i = 0; i < inputLen; i += 3) {
            int cotonEnd = Math.min(i + 3, inputLen);
            String coton = rnaSequence.substring(i, cotonEnd);
            String protein = CODON_MAP.getOrDefault(coton, "Unknown");
            if(protein.equals("Unknown")) throw new IllegalArgumentException("Invalid codon");
            if(protein.equals("Stop"))    break;
            output.add(protein);
        }
        return output;
    }
}