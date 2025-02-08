import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

class HandshakeCalculator {
    List<Signal> calculateHandshake(int number) {
        List<Signal> output = new ArrayList<>();
        Signal[] signals = Signal.values();
        for (int i = 0; i < signals.length; i++)
            if((number & (1 << i)) != 0)
                output.add(signals[i]);
        if((number & (1 << 4)) != 0)
            Collections.reverse(output);
        return output;
    }
}