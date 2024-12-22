public class GameMaster {

    public static String describe(Character avatar) {
        return "You're a level " + avatar.getLevel() + " " + avatar.getCharacterClass() + " with " + avatar.getHitPoints() + " hit points.";
    }

    public static String describe(Destination town) {
        return "You've arrived at " + town.getName() + ", which has " + town.getInhabitants() + " inhabitants.";
    }

    public static String describe(TravelMethod traveling) {
        return "You're traveling to your destination " + (traveling == TravelMethod.WALKING ? "by walking." : "on horseback.");
    }

    public static String describe(Character avatar, Destination town, TravelMethod traveling) {
        return String.join(" ", describe(avatar), describe(traveling), describe(town));
    }

    public static String describe(Character avatar, Destination town) {
        return describe(avatar, town, TravelMethod.WALKING);
    }
}
