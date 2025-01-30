using System;

class BirdCount
{
    private int[] birdsPerDay;

    public BirdCount(int[] birdsPerDay)
    {
        this.birdsPerDay = birdsPerDay;
    }

    public static int[] LastWeek()
        => new int[] { 0, 2, 5, 3, 7, 8, 4 };

    public int Today()
        => birdsPerDay[birdsPerDay.Length - 1];

    public void IncrementTodaysCount()
        => birdsPerDay[birdsPerDay.Length - 1]++;

    public bool HasDayWithoutBirds()
    {
        foreach(int i in birdsPerDay)
            if(i == 0) return true;
        return false;
    }

    public int CountForFirstDays(int numberOfDays)
    {
        int count = 0;
        for(int i = 0; i < numberOfDays && i < birdsPerDay.Length; i++)
            count += birdsPerDay[i];
        return count;
    }

    public int BusyDays()
    {
        int count = 0;
        foreach(int i in birdsPerDay)
            if(i >= 5) count++;
        return count;
    }
}