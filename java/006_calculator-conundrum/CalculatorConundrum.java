class CalculatorConundrum {
    public String calculate(int operand1, int operand2, String operation) {
        int result = 0;
        try{
            switch(operation) {
                case null:
                    throw new IllegalArgumentException("Operation cannot be null");
                case "+": 
                    result = operand1 + operand2;
                    break;
                case "*":
                    result = operand1 * operand2;
                    break;
                case "/":
                    result = operand1 / operand2;
                    break;
                case "":
                    throw new IllegalArgumentException("Operation cannot be empty");
                default:
                    throw new IllegalOperationException("Operation '" + operation + "' does not exist");
            }
        } catch (ArithmeticException e) {
            throw new IllegalOperationException("Division by zero is not allowed",e);
        }
        return operand1 + " " + operation + " " + operand2 + " = " + result;
    }
}
