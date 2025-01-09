class NaturalNumber {
    private int classification;
    
    NaturalNumber(int number) {
        if(number < 1)
            throw new IllegalArgumentException("You must supply a natural number (positive integer)");
        int suma = 0;
        for(int i = 1; i <= number / 2; i++)
            if(number % i == 0)
                suma += i;
        this.classification = suma - number;
    }

    Classification getClassification() {
        return classification < 0
            ? Classification.DEFICIENT
            : classification > 0
            ? Classification.ABUNDANT
            : Classification.PERFECT;
    }
}