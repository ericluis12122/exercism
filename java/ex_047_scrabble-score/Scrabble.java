import java.util.HashMap;
import java.util.Map;

class Scrabble {
    private static final Map<Character, Integer> LETTER_POINTS = createLetterPoints();
    private final int score;
    
    private static Map<Character, Integer> createLetterPoints() {
        Map<Character, Integer> map = new HashMap<>();
        addLetters(map, 1, "AEIOULNRST");
        addLetters(map, 2, "DG");
        addLetters(map, 3, "BCMP");
        addLetters(map, 4, "FHVWY");
        addLetters(map, 5, "K");
        addLetters(map, 8, "JX");
        addLetters(map, 10, "QZ");
        return map;
    }

    private static void addLetters(Map<Character, Integer> map, int points, String letters) {
        for (char letter : letters.toCharArray())
            map.put(letter, points);
    }
    
    Scrabble(String word) {
        if (word == null || word.isEmpty()) 
            this.score = 0;
        else 
            this.score = word.toUpperCase().chars()
                .map(c -> LETTER_POINTS.getOrDefault((char) c, 0))
                .sum();
    }
    
    int getScore() {
        return this.score;
    }
}