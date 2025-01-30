public class ElonsToyCar {
    private int usageCounter;
    
    public static ElonsToyCar buy() {
        return new ElonsToyCar();
    }

    public String distanceDisplay() {
        return usageCounter < 100 ? "Driven " + (usageCounter * 20) +  " meters" : "Driven 2000 meters";
    }

    public String batteryDisplay() {
        return usageCounter < 100 ? "Battery at " + (100 - usageCounter) + "%" : "Battery empty";
    }

    public void drive() {
        usageCounter++;
    }
}
