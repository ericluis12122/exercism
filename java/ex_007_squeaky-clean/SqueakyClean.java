class SqueakyClean {
    static String clean(String identifier) {
        int longitudCadena = identifier.length();
        String salida = "";
        char[] cadena = identifier.toCharArray();  
        for(int i = 0; i < longitudCadena; i++) {
    	    if (cadena[i] == ' ')
        	    salida += "_";
            else if (cadena[i] == '-' && i+1 < longitudCadena && Character.isLetter(cadena[i+1])) {
        	    salida += Character.toString(Character.toUpperCase(cadena[i+1]));
                i++;
            }
            else if (cadena[i] == '0')
        	    salida += "o";
            else if (cadena[i] == '1')
        	    salida += "l";
            else if (cadena[i] == '3')
        	    salida += "e";
            else if (cadena[i] == '4')
        	    salida += "a";
            else if (cadena[i] == '7')
        	    salida += "t";
		    else if (Character.isLetterOrDigit(cadena[i]))
        	    salida += Character.toString(cadena[i]);	
        }
        return salida;
    }
}
