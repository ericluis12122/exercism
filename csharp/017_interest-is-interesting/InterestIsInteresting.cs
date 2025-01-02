using System;

static class SavingsAccount
{
    public static float InterestRate(decimal balance)
        => balance switch
        {
            >= 5_000.0m => 2.475f,
            >= 1_000.0m => 1.621f,
            >= 0.0m     => 0.5f,
            _           => 3.213f
        };

    public static decimal Interest(decimal balance)
        => balance * (decimal)InterestRate(balance) / 100;

    public static decimal AnnualBalanceUpdate(decimal balance)
        => balance + Interest(balance);

    public static int YearsBeforeDesiredBalance(decimal balance, decimal targetBalance)
    {
        int years = 0;
        while(balance < targetBalance) {
            balance = AnnualBalanceUpdate(balance);
            years++;
        }
        return years;
    }
}