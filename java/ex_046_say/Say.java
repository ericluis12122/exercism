import java.util.ArrayList;
import java.util.List;

public class Say {
    private static final String[] LESS_THAN_20 = {
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    };
    private static final String[] TENS = {
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    };
    private static final String[] SCALES = {"", "thousand", "million", "billion", "trillion"};

    public String say(long number) {
        if (number < 0 || number > 999_999_999_999L)
            throw new IllegalArgumentException("Number must be between 0 and 999,999,999,999.");
        if (number == 0)
            return "zero";
        List<String> parts = new ArrayList<>();
        int scaleIndex = 0;
        // Process the number in chunks of thousands
        while (number > 0) {
            long chunk = number % 1000;
            number /= 1000;
            if (chunk > 0)
                parts.add(convertChunk(chunk) + " " + SCALES[scaleIndex]);
            scaleIndex++;
        }
        // Reverse the parts to get the correct order
        StringBuilder result = new StringBuilder();
        for (int i = parts.size() - 1; i >= 0; i--) {
            if (i < parts.size() - 1)
                result.append(" ");
            result.append(parts.get(i).trim());
        }
        return result.toString().trim();
    }

    private String convertChunk(long chunk) {
        if (chunk == 0)  return "";
        if (chunk < 20)  return LESS_THAN_20[(int) chunk];
        if (chunk < 100) return TENS[(int) (chunk / 10)] + (chunk % 10 != 0 ? "-" + LESS_THAN_20[(int) (chunk % 10)] : "");
        return LESS_THAN_20[(int)(chunk / 100)] + " hundred" + (chunk % 100 != 0 ? " " + convertChunk(chunk % 100) : "");
    }
}