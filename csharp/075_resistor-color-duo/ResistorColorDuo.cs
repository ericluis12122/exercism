using System;

public static class ResistorColorDuo
{
    public static int Value(string[] colors)
        => ColorCode(colors[0]) * 10 + ColorCode(colors[1]);
    
    static int ColorCode(string color)
        => Array.IndexOf(Colors(), color);
    
    static string[] Colors()
        => "black,brown,red,orange,yellow,green,blue,violet,grey,white".Split(',');
}