public class Lasagna {
    static final int EXPECTED_OVEN_TIME = 40;
    static final int TIME_FOR_LAYER = 2;
    
    public int expectedMinutesInOven() {
        return EXPECTED_OVEN_TIME;
    }

    public int remainingMinutesInOven(int timeInOven) {
        return expectedMinutesInOven() - timeInOven;
    }

    public int preparationTimeInMinutes(int numberOfLayers) {
        return TIME_FOR_LAYER * numberOfLayers;
    }

    public int totalTimeInMinutes(int numberOfLayers, int timeInOven) {
        return preparationTimeInMinutes(numberOfLayers) + timeInOven;
    }
}