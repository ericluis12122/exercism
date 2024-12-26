class ArmstrongNumbers {
    boolean isArmstrongNumber(int numberToCheck) {
        String numberStr = Integer.toString(numberToCheck);
        int len = numberStr.length();
        int acc = 0;
        for (int i = 0; i < len; i++)
            acc += (int)Math.pow(Character.getNumericValue(numberStr.charAt(i)), len);
        return acc == numberToCheck;
    }
}