class SpaceAge:
    __orbital_period_in_Earth_Years = (('earth', 1), ('mercury', 0.2408467), 
    ('venus', 0.61519726), ('mars', 1.8808158), ('jupiter', 11.862615),
    ('saturn', 29.447498), ('uranus', 84.016846), ('neptune', 164.79132))
    
    def __init__(self, seconds):
        self.__age_in_earth = seconds / 60 / 60 / 24 / 365.25
        for name, value in self.__orbital_period_in_Earth_Years:
            setattr(self, 'on_' + name, self.__body(value))

    def __body(self, value):
        return lambda : round(self.__age_in_earth / value, 2)