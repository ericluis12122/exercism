using System.Text;
public static class Identifier
{
    public static string Clean(string identifier)
    {
        StringBuilder output = new StringBuilder(identifier.Length);
        bool toUpper = false;
        foreach(char c in identifier)
        {
        	if(c == '-')
            	toUpper = true;
        	else if(c == ' ')
            	output.Append('_');
			else if(char.IsControl(c))
            	output.Append("CTRL");  
            else if(char.IsLetter(c) && (c < 'α' || c > 'ω'))
            {
                char C = c;
                if(toUpper)
                {
                    C = char.ToUpper(c);
                    toUpper = false;
                }
                output.Append(C);
            }
        }
        return output.ToString();
    }
}