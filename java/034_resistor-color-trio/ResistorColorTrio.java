import java.util.Arrays;

class ResistorColorTrio {
    String label(String[] colors) {
        long result = value(colors);
        int count = 0;
        while(result != 0 && result % 1000 == 0) {
          count++;
          result /= 1000;
        }
        return result + " " + magnitudes(count) + "ohms";
    }

    long value(String[] colors) {
        return (colorCode(colors[0]) * 10 + colorCode(colors[1])) * (long)Math.pow(10, colorCode(colors[2]));
    }
    
    int colorCode(String color) {
        return Arrays.asList(colors()).indexOf(color);
    }
    
    String[] colors() {
        return "black,brown,red,orange,yellow,green,blue,violet,grey,white".split(",");
    }

    String magnitudes(int index) {
        return ",kilo,mega,giga".split(",")[index];
    }
}
