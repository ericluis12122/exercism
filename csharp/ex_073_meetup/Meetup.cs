using System;

public enum Schedule
{
    Teenth,
    First,
    Second,
    Third,
    Fourth,
    Last
}

public class Meetup
{
    private readonly int _month;
    private readonly int _year;

    public Meetup(int month, int year)
    {
        this._month = month;
        this._year = year;
    }

    public DateTime Day(DayOfWeek dayOfWeek, Schedule schedule)
    {
        DateTime firstDayOfMonth = new DateTime(_year, _month, 1);
        int daysInMonth = DateTime.DaysInMonth(_year, _month);

        switch (schedule)
        {
            case Schedule.Teenth:
                for (int day = 13; day <= 19; day++)
                {
                    DateTime date = new DateTime(_year, _month, day);
                    if (date.DayOfWeek == dayOfWeek)
                        return date;
                }
                break;

            case Schedule.First:
                return GetNthDayOfWeek(1, dayOfWeek);

            case Schedule.Second:
                return GetNthDayOfWeek(2, dayOfWeek);

            case Schedule.Third:
                return GetNthDayOfWeek(3, dayOfWeek);

            case Schedule.Fourth:
                return GetNthDayOfWeek(4, dayOfWeek);

            case Schedule.Last:
                for (int day = daysInMonth; day > 0; day--)
                {
                    DateTime date = new DateTime(_year, _month, day);
                    if (date.DayOfWeek == dayOfWeek)
                        return date;
                }
                break;

            default:
                throw new ArgumentOutOfRangeException(nameof(schedule), "Invalid schedule");
        }

        throw new InvalidOperationException("Date not found");
    }

    private DateTime GetNthDayOfWeek(int n, DayOfWeek dayOfWeek)
    {
        DateTime firstDayOfMonth = new DateTime(_year, _month, 1);
        int dayOffset = ((int)dayOfWeek - (int)firstDayOfMonth.DayOfWeek + 7) % 7;
        int targetDay = 1 + dayOffset + (n - 1) * 7;

        if (targetDay > DateTime.DaysInMonth(_year, _month))
            throw new ArgumentOutOfRangeException(nameof(n), "Invalid week number");

        return new DateTime(_year, _month, targetDay);
    }
}