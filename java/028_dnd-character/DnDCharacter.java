import java.util.List;
import java.util.stream.IntStream;
import java.util.Random;
import java.util.ArrayList;
import java.util.Collections;

class DnDCharacter {
    private int[] abilities = new int[6];
    private final int baseHitpoints = 10;
    
    DnDCharacter() {
        IntStream.range(0, 6).forEach(i -> abilities[i] = ability(rollDice()));
    }

    int ability(List<Integer> scores) {
        List<Integer> input = new ArrayList<>(scores);
        Collections.sort(input);
        return input.stream().mapToInt(Integer::intValue).sum() - input.get(0);
    }

    List<Integer> rollDice() {
        List<Integer> dices = new ArrayList<Integer>();
        Random random = new Random();
        IntStream.range(0, 4).forEach(i -> dices.add(random.nextInt(6) + 1));
        return dices;
    }

    int modifier(int input) {
        return (int) Math.floor((input - 10) / 2.0);
    }

    int getStrength() {
        return abilities[0];   
    }

    int getDexterity() {
        return abilities[1];   
    }

    int getConstitution() {
        return abilities[2];    
    }

    int getIntelligence() {
        return abilities[3];
    }

    int getWisdom() {
        return abilities[4]; 
    }

    int getCharisma() {
        return abilities[5];
    }

    int getHitpoints() {
        return baseHitpoints + modifier(getConstitution());
    }
}