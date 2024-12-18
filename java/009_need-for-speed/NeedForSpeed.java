class NeedForSpeed {
    protected final int speed;
    protected int battery;
    protected int distance;
    
    NeedForSpeed(int speed, int batteryDrain) {
        this.speed = speed;
        this.battery = (int)100 / batteryDrain;
    }

    public boolean batteryDrained() {
        return battery == 0;
    }

    public int distanceDriven() {
        return distance;
    }

    public void drive() {
        if (!batteryDrained()) {
            distance += speed;
            battery--;
        }     
    }

    public static NeedForSpeed nitro() {
        return new NeedForSpeed(50,4);
    }
}

class RaceTrack {
    private final int distance;
    
    RaceTrack(int distance) {
        this.distance = distance;
    }

    public boolean canFinishRace(NeedForSpeed car) {
        return car.battery * car.speed >= distance;
    }
}
