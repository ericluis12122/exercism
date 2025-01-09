import java.util.HashSet;

public class PangramChecker {
    public boolean isPangram(String input) {
        HashSet<Character> bag = new HashSet<Character>();
        for(Character c : input.toCharArray())
            if(Character.isLetter(c))
                bag.add(Character.toLowerCase(c));
        return bag.size() == 26;
    }
}