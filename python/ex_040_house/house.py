phrases = [x + " that " + y for x, y in (("house", "Jack built."), ("malt", "lay in"), ("rat", "ate"), ("cat", "killed"), ("dog", "worried"), ("cow with the crumpled horn", "tossed"), ("maiden all forlorn", "milked"), ("man all tattered and torn", "kissed"), ("priest all shaven and shorn", "married"), ("rooster that crowed in the morn", "woke"), ("farmer sowing his corn", "kept"), ("horse and the hound and the horn", "belonged to"))]

def recite(start_verse, end_verse):
    return [recite_verse(number) for number in range(start_verse, end_verse + 1)]
    
def recite_verse(number):
    return ' the '.join(['This is'] + phrases[:number][::-1])