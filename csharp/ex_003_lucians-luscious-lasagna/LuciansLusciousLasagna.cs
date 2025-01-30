class Lasagna
{
    public const int ExpectedOvenTime = 40;
    public const int PreparationTimePerLayer = 2;
    public int ExpectedMinutesInOven() => ExpectedOvenTime;
    public int RemainingMinutesInOven(int actualTime) => ExpectedMinutesInOven() - actualTime;
    public int PreparationTimeInMinutes(int numberOfLayers) => numberOfLayers * PreparationTimePerLayer;
    public int ElapsedTimeInMinutes(int numberOfLayers, int actualTime) => PreparationTimeInMinutes(numberOfLayers) + actualTime;
}
