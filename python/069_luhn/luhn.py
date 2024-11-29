class Luhn:
    def __init__(self, card_num):
        self.number = card_num.replace(' ', '')

    def valid(self):
        if len(self.number) < 2 or not self.number.isdigit(): return False
        suma = int(self.number[0]) if len(self.number) % 2 else 0
        for i in range(len(self.number) - 2, -1, -2):
            suma += int(self.number[i]) * 2 - 9 * (int(self.number[i]) > 4) + int(self.number[i + 1])
        return not suma % 10
