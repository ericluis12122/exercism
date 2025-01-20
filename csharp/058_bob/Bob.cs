using System;
using System.Text.RegularExpressions;

public static class Bob
{
    private static readonly string[] Answers = {
        "Fine. Be that way!",
        "Whatever.",
        "Whoa, chill out!",
        "Sure.",
        "Calm down, I know what I'm doing!"
    };
    
    public static string Response(string statement)
    {
        statement = statement.Trim();
        bool isSomething = statement.Length > 0;
        bool isUpper = Regex.IsMatch(statement, "[A-Z]") && !Regex.IsMatch(statement, "[a-z]");
        bool isQuestion = statement.EndsWith("?");
        int index = Convert.ToInt32(isSomething) 
                  + Convert.ToInt32(isUpper) 
                  + (Convert.ToInt32(isQuestion) * 2);
        return Answers[index];
    }
}