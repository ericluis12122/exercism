import java.util.Arrays;

class ResistorColorDuo {
    int value(String[] colors) {
        return colorCode(colors[0]) * 10 + colorCode(colors[1]);
    }
    
    int colorCode(String color) {
        return Arrays.asList(colors()).indexOf(color);
    }
    
    String[] colors() {
        return "black,brown,red,orange,yellow,green,blue,violet,grey,white".split(",");
    }
}