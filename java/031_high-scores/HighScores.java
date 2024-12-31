import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class HighScores {
    private final List<Integer> store;

    public HighScores(List<Integer> highScores) {
        this.store = new ArrayList<Integer>(highScores);
    }

    List<Integer> scores() {
        return new ArrayList<Integer>(this.store);
    }

    Integer latest() {
        return this.store.getLast();
    }

    Integer personalBest() {
        return Collections.max(this.store);
    }

    List<Integer> personalTopThree() {
        return this.store.stream()
                .sorted(Comparator.reverseOrder())
                .toList()
                .subList(0,Math.min(3, this.store.size()));
    }
}