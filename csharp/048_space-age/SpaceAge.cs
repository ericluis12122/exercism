using System;
using System.Collections.Generic;

public class SpaceAge
{
    private static readonly Dictionary<string, double> mapa = new Dictionary<string, double>
    {
        { "mercury", 0.2408467 },
        { "venus", 0.61519726 },
        { "earth", 1.0 },
        { "mars", 1.8808158 },
        { "jupiter", 11.862615 },
        { "saturn", 29.447498 },
        { "uranus", 84.016846 },
        { "neptune", 164.79132 }
    };

    private readonly int _seconds;
    
    public SpaceAge(int seconds)
    {
        this._seconds = seconds;
    }

    private double CalculateAge(string planet)
        => _seconds / 31557600.0 / mapa[planet];

    public double OnEarth() => CalculateAge("earth");
    public double OnMercury() => CalculateAge("mercury");
    public double OnVenus() => CalculateAge("venus");
    public double OnMars() => CalculateAge("mars");
    public double OnJupiter() => CalculateAge("jupiter");
    public double OnSaturn() => CalculateAge("saturn");
    public double OnUranus() => CalculateAge("uranus");
    public double OnNeptune() => CalculateAge("neptune");
}