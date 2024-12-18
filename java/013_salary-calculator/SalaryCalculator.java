public class SalaryCalculator {
    public double salaryMultiplier(int daysSkipped) {
        return daysSkipped < 5 ? 1 : 0.85;
    }

    public int bonusMultiplier(int productsSold) {
        return productsSold < 20 ? 10 : 13;
    }

    public double bonusForProductsSold(int productsSold) {
        return productsSold * bonusMultiplier(productsSold);
    }

    public double finalSalary(int daysSkipped, int productsSold) {
        final double baseSalary = 1000;
        double totalSalary = (baseSalary + bonusForProductsSold(productsSold)) * salaryMultiplier(daysSkipped);
        return totalSalary > 2000 ? 2000 : totalSalary;
    } 
}
