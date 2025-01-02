using System;

class RemoteControlCar
{
    private const int MetersCovers = 20;
    private const int BatteryDrain = 1;
    private int _currentBattery;
    private int _currentDistance;

    public RemoteControlCar()
    {
        _currentBattery = 100;
        _currentDistance = 0;
    }
    
    public static RemoteControlCar Buy()
        => new RemoteControlCar();

    public string DistanceDisplay()
        => $"Driven {_currentDistance} meters";

    public string BatteryDisplay()
        => _currentBattery == 0 
            ? "Battery empty"
            : $"Battery at {_currentBattery}%";

    public void Drive()
    {
        if(_currentBattery > 0) {
            _currentDistance += MetersCovers;
            _currentBattery -= BatteryDrain;
        }
    }
}