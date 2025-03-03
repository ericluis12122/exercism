import random

ABILITIES = ('strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma')

class Character:
    def __init__(self):
        for stat_name in ABILITIES:
            setattr(self, stat_name, self.ability())
        self.hitpoints = 10 + modifier(self.constitution)

    def ability(self):
        four_dice_throws = [random.randint(1, 6) for _ in range(4)]
        return sum(four_dice_throws) - min(four_dice_throws)

def modifier(value):
    return (value - 10) // 2

    
