using System;

public static class Triangle
{
    private static bool IsTriangle(double side1, double side2, double side3)
    {
        double[] arr = {side1, side2, side3};
        Array.Sort(arr);
        return arr[0] > 0.0 && arr[0] + arr[1] >= arr[2];
    }
    
    public static bool IsScalene(double side1, double side2, double side3)
        => IsTriangle(side1, side2, side3) && side1 != side2 && side1 != side3 && side2 != side3;

    public static bool IsIsosceles(double side1, double side2, double side3)
        => IsTriangle(side1, side2, side3) && (side1 == side2 || side1 == side3 || side2 == side3);

    public static bool IsEquilateral(double side1, double side2, double side3) 
        => IsTriangle(side1, side2, side3) && side1 == side2 && side2 == side3;
}