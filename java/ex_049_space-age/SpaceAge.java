class SpaceAge {
    private static final double EARTH_YEAR_IN_SECONDS = 31557600.0;

    private static final double MERCURY_ORBITAL_PERIOD = 0.2408467;
    private static final double VENUS_ORBITAL_PERIOD = 0.61519726;
    private static final double EARTH_ORBITAL_PERIOD = 1.0;
    private static final double MARS_ORBITAL_PERIOD = 1.8808158;
    private static final double JUPITER_ORBITAL_PERIOD = 11.862615;
    private static final double SATURN_ORBITAL_PERIOD = 29.447498;
    private static final double URANUS_ORBITAL_PERIOD = 84.016846;
    private static final double NEPTUNE_ORBITAL_PERIOD = 164.79132;

    private final double seconds;

    SpaceAge(double seconds) {
        this.seconds = seconds;
    }

    double getSeconds() {
        return this.seconds;
    }

    double onEarth() {
        return calculateAge(EARTH_ORBITAL_PERIOD);
    }

    double onMercury() {
        return calculateAge(MERCURY_ORBITAL_PERIOD);
    }

    double onVenus() {
        return calculateAge(VENUS_ORBITAL_PERIOD);
    }

    double onMars() {
        return calculateAge(MARS_ORBITAL_PERIOD);
    }

    double onJupiter() {
        return calculateAge(JUPITER_ORBITAL_PERIOD);
    }

    double onSaturn() {
        return calculateAge(SATURN_ORBITAL_PERIOD);
    }

    double onUranus() {
        return calculateAge(URANUS_ORBITAL_PERIOD);
    }

    double onNeptune() {
        return calculateAge(NEPTUNE_ORBITAL_PERIOD);
    }

    private double calculateAge(double orbitalPeriod) {
        return Math.round((seconds / (EARTH_YEAR_IN_SECONDS * orbitalPeriod)) * 100.0) / 100.0;
    }
}