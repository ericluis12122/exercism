using System;

class RemoteControlCar
{
    private readonly int _speed;
    private readonly int _batteryDrain;
    private int _currentDistance;
    private int _currentBattery;
    
    public RemoteControlCar(int speed, int batteryDrain)
    {
        this._speed = speed;
        this._batteryDrain = batteryDrain;
        this._currentDistance = 0;
        this._currentBattery = 100;
    }
    
    public bool BatteryDrained()
        => _currentBattery < _batteryDrain;

    public int DistanceDriven()
        => _currentDistance;

    public void Drive()
    {
        if(!BatteryDrained()) {
            _currentDistance += _speed;
            _currentBattery  -= _batteryDrain;
        }
    }

    public static RemoteControlCar Nitro()
        => new RemoteControlCar(50, 4);
}

class RaceTrack
{
    private readonly int _distance;
        
    public RaceTrack(int distance)
    {
        this._distance = distance;
    }

    public bool TryFinishTrack(RemoteControlCar car)
    {
        while(!car.BatteryDrained())
        {
            car.Drive();
            if(car.DistanceDriven() >= _distance)
                return true;
        }
        return false;
    }
}