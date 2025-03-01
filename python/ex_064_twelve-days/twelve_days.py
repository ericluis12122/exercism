def recite(start_verse, end_verse):
    return lyrics_of_christmas_song()[start_verse - 1 : end_verse]

def lyrics_of_christmas_song():
    song = ['On the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.']
    for i in range(11):
        song.insert(0,genarate_previus_verse(song[0]))
    return song

def genarate_previus_verse(current_verse):
    current_number_day = current_verse.split(' ', 3)[-2]
    cut_1 = current_verse.split(', ', 1)
    previus_number_day = cut_1[1].split(' ', 1)[0]
    if previus_number_day == 'and': cut_1[1] = cut_1[1][4:]
    cut_2 = cut_1[0].split(':')
    return cut_2[0].replace(current_number_day,convertir(previus_number_day)) + ": " + cut_1[1]

def convertir(number):
    if number == 'and': return 'first'
    if number == 'two': return 'second'
    if number == 'three': return 'third'
    if number == 'five': return 'fifth'
    if number[-1] == 'e': return number[:-1] + 'th'
    if number[-1] == 't': return number + 'h'
    return number + 'th'
