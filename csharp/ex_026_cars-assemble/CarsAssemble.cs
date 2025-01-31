using System;

static class AssemblyLine
{
    const int Cars_X_Hour = 221;
    
    public static double SuccessRate(int speed)
    {
        if(1 <= speed && speed <= 4 ) return 1.0;
        if(5 <= speed && speed <= 8) return 0.9;
        if(speed == 9) return 0.8;
        if(speed == 10) return 0.77;
        return 0.0;
    }
    
    public static double ProductionRatePerHour(int speed)
        => speed * Cars_X_Hour * SuccessRate(speed);
        
    public static int WorkingItemsPerMinute(int speed)
        => (int)ProductionRatePerHour(speed) / 60;
}