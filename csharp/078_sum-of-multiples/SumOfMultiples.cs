using System.Linq;
using System.Collections.Generic;

public static class SumOfMultiples
{
    public static int Sum(IEnumerable<int> multiples, int max)
    {
        HashSet<int> bag = new HashSet<int>();
        foreach(int n in multiples)
            if(n > 0)
                for(int i = n; i < max; i += n)
                    bag.Add(i);
        return bag.Sum();
    }
}