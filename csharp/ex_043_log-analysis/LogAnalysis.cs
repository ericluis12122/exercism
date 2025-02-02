using System;

public static class LogAnalysis 
{
    public static string SubstringAfter(this string input, string param)
        => input.Split(param, 2)[1];

    public static string SubstringBetween(this string input, string ini, string end)
        => input[(input.IndexOf(ini) + ini.Length)..input.IndexOf(end)];
    
    public static string Message(this string input)
        => input.SubstringAfter(": ");

    public static string LogLevel(this string input)
        => input.SubstringBetween("[", "]");
}