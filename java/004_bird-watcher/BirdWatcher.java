class BirdWatcher {
    private final int[] birdsPerDay;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public int[] getLastWeek() {
        return new int[] {0,2,5,3,7,8,4};
    }

    public int getToday() {
        return birdsPerDay[birdsPerDay.length-1];
    }

    public void incrementTodaysCount() {
        birdsPerDay[birdsPerDay.length-1]++;
    }

    public boolean hasDayWithoutBirds() {
        for(int i : birdsPerDay) if (i == 0) return true;
        return false;
    }

    public int getCountForFirstDays(int numberOfDays) {
        int result = 0;
        int checkLength = Math.min(numberOfDays,birdsPerDay.length);
        for(int i = 0; i < checkLength; i++) result += birdsPerDay[i];
        return result;
    }

    public int getBusyDays() {
        int counter = 0;
        for(int i : birdsPerDay) if (i >= 5) counter++;
        return counter;
    }
}