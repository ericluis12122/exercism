export class House {
  static verse(n) {
    const phrases = [
      ['lay in', 'house that Jack built.'],
      ['ate', 'malt'],
      ['killed', 'rat'],
      ['worried', 'cat'],
      ['tossed', 'dog'],
      ['milked', 'cow with the crumpled horn'],
      ['kissed', 'maiden all forlorn'],
      ['married', 'man all tattered and torn'],
      ['woke', 'priest all shaven and shorn'],
      ['kept', 'rooster that crowed in the morn'],
      ['belonged to', 'farmer sowing his corn'],
      ['', 'horse and the hound and the horn']
    ];

    const lines = [];
    for (let i = n - 1; i >= 0; i--) {
      if (i === n - 1)
        lines.push(`This is the ${phrases[i][1]}`);
      else
        lines.push(`that ${phrases[i][0]} the ${phrases[i][1]}`);
    }
    return lines;
  }

  static verses(startVerse, endVerse) {
    const allVerses = [];
    for (let i = startVerse; i <= endVerse; i++) {
      allVerses.push(...this.verse(i));
      if (i !== endVerse)
        allVerses.push('');
    }
    return allVerses;
  }
}