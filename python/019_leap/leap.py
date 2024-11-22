def leap_year(year):
    return (not year % 4 and bool(year % 100)) or not year % 400