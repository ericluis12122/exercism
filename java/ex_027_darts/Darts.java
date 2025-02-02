class Darts {
    int score(double x, double y) {
        double result = Math.sqrt(x * x + y * y);
        if(result <= 1.0) return 10;
        if(result <= 5.0) return 5;
        if(result <= 10.0) return 1;
        return 0;
    }
}