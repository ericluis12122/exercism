using System;
using System.Collections.Generic;
using System.Linq;

public static class Dominoes
{
    public static bool CanChain(IEnumerable<(int, int)> dominoes)
    {
        var dominoList = dominoes.ToList();
        if (!dominoList.Any()) return true;

        return CanFormChain(dominoList, new List<(int, int)>());
    }

    private static bool CanFormChain(List<(int, int)> remaining, List<(int, int)> chain)
    {
        if (!remaining.Any())
        {
            // Check if the chain is valid by ensuring the first and last dominoes match
            return chain.First().Item1 == chain.Last().Item2;
        }

        for (int i = 0; i < remaining.Count; i++)
        {
            var current = remaining[i];

            // Try placing the domino in its original orientation
            if (chain.Count == 0 || chain.Last().Item2 == current.Item1)
            {
                var newChain = new List<(int, int)>(chain) { current };
                var newRemaining = new List<(int, int)>(remaining);
                newRemaining.RemoveAt(i);

                if (CanFormChain(newRemaining, newChain)) return true;
            }

            // Try placing the domino in its flipped orientation
            if (chain.Count == 0 || chain.Last().Item2 == current.Item2)
            {
                var flipped = (current.Item2, current.Item1);
                var newChain = new List<(int, int)>(chain) { flipped };
                var newRemaining = new List<(int, int)>(remaining);
                newRemaining.RemoveAt(i);

                if (CanFormChain(newRemaining, newChain)) return true;
            }
        }
        return false;
    }
}