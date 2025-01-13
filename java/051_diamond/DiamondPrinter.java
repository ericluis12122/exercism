import java.util.List;
import java.util.ArrayList;

class DiamondPrinter {    
    List<String> printToList(char a) {
        int pad = a - 'A';
        int center = 1;
        List<String> output = new ArrayList<>();
        output.add(" ".repeat(pad) + "A" + " ".repeat(pad--));
        for(char c = 'B'; c <= a; c++, center+=2, pad--)
            output.add(" ".repeat(pad) + c + " ".repeat(center) + c + " ".repeat(pad));
        int len = output.size() - 2;
        for(int i = len; i >= 0; i--)
            output.add(output.get(i));
        return output;
    }
}