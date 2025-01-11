using System;

public class Player
{
    private static readonly Random RG = new Random();
    
    public int RollDie()
        => RG.Next(1, 19);

    public double GenerateSpellStrength()
        => RG.NextDouble() * 100.0;
}