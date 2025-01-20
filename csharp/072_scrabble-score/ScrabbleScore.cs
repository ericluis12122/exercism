using System;
using System.Collections.Generic;
using System.Linq;

public static class ScrabbleScore
{
    private static readonly Dictionary<char, int> LetterPoints = CreateLetterPoints();
    private static Dictionary<char, int> CreateLetterPoints()
    {
        var map = new Dictionary<char, int>();
        AddLetters(map, 1, "AEIOULNRST");
        AddLetters(map, 2, "DG");
        AddLetters(map, 3, "BCMP");
        AddLetters(map, 4, "FHVWY");
        AddLetters(map, 5, "K");
        AddLetters(map, 8, "JX");
        AddLetters(map, 10, "QZ");
        return map;
    }
    private static void AddLetters(Dictionary<char, int> map, int points, string letters)
    {
        foreach (char letter in letters) 
            map[letter] = points;
    }
    public static int Score(string input)
        => input.ToUpper().Sum(c => LetterPoints.GetValueOrDefault(c, 0));
}