using System;

public static class Darts
{
    public static int Score(double x, double y)
        => Math.Sqrt(x * x + y * y) switch {
            <= 1.0  => 10,
            <= 5.0  => 5,
            <= 10.0 => 1,
            _       => 0
        };
}