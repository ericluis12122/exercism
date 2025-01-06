import java.util.stream.IntStream;

public class Hamming {
    private final int HammingDistance;
    
    public Hamming(String leftStrand, String rightStrand) {
        if(leftStrand.length() != rightStrand.length()) {
            throw new IllegalArgumentException("strands must be of equal length");
        }
        this.HammingDistance = IntStream.range(0, leftStrand.length())
            .map(i -> leftStrand.charAt(i) != rightStrand.charAt(i) ? 1 : 0)
            .sum();
    }

    public int getHammingDistance() {
        return HammingDistance;
    }
}