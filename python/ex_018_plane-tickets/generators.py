"""Functions to automate Conda airlines ticketing system."""

def generate_seat_letters(number):
    """Generate a series of letters for airline seats.

    :param number: int - total number of seat letters to be generated.
    :return: generator - generator that yields seat letters.

    Seat letters are generated from A to D.
    After D it should start again with A.

    Example: A, B, C, D
    """
    letters = ('A', 'B', 'C', 'D')
    for index in range(number):
        yield letters[index % 4]

def generate_seats(number):
    """Generate a series of identifiers for airline seats.

    :param number: int - total number of seats to be generated.
    :return: generator - generator that yields seat numbers.

    A seat number consists of the row number and the seat letter.

    There is no row 13.
    Each row has 4 seats.

    Seats should be sorted from low to high.

    Example: 3C, 3D, 4A, 4B
    """    
    letters = generate_seat_letters(number)
    jump = 1
    for index in range(number):
        if index // 4 + jump == 13: 
            jump = 2
        yield str(index // 4 + jump) + next(letters)        

def assign_seats(passengers):
    """Assign seats to passengers.

    :param passengers: list[str] - a list of strings containing names of passengers.
    :return: dict - with the names of the passengers as keys and seat numbers as values.

    Example output: {"Adele": "1A", "Björk": "1B"}
    """
    seats = generate_seats(len(passengers))
    return {passenger : next(seats) for passenger in passengers}
        
def generate_codes(seat_numbers, flight_id):
    """Generate codes for a ticket.

    :param seat_numbers: list[str] - list of seat numbers.
    :param flight_id: str - string containing the flight identifier.
    :return: generator - generator that yields 12 character long ticket codes.
    """
    for number in seat_numbers:
        code = number + flight_id
        yield code + '0' * (12 - len(code))
