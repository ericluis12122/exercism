class CollatzCalculator {
    int computeStepCount(int n) {
        if(n < 1) throw new IllegalArgumentException("Only positive integers are allowed");
        if(n == 1) return 0;
        return  1 + computeStepCount(n % 2 == 0 ? n / 2 : n * 3 + 1);
    }
}