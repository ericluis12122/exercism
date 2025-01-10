public class EliudsEggs {
    public int eggCount(int number) {
        int count = 0;
        for (; number > 0; count++)
            number &= (number - 1); // Removes the least significant bit set to 1
        return count;
    }
}