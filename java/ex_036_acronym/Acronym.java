class Acronym {
    private String acronym;
    
    Acronym(String phrase) {
        StringBuilder result = new StringBuilder();
        boolean nextUpper = true;
        for (char c : phrase.toCharArray()) {
            if(nextUpper && Character.isLetter(c)) {
                result.append(Character.toUpperCase(c));
                nextUpper = false;
            } else if (" -_".contains(String.valueOf(c))) {
                nextUpper = true;
            }
        }
        this.acronym = result.toString();
    }

    String get() {
        return this.acronym;
    }
}