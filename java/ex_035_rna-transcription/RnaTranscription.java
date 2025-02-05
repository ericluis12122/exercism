import java.util.Map;
    
class RnaTranscription {
    private final Map<Character, Character> mapa = Map.of(
            'G', 'C',
            'C', 'G',
            'T', 'A',
            'A', 'U'
        );
    String transcribe(String dnaStrand) {
        StringBuilder result = new StringBuilder();
        for (char c : dnaStrand.toCharArray()) {
            result.append(mapa.getOrDefault(c, c));
        }
        return result.toString();
    }
}