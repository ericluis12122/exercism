export class ResistorColorTrio {
  #COLORS = 'black brown red orange yellow green blue violet grey white'.split(' ');
  #MAGNITUDES = ',kilo,mega,giga'.split(',');
  #c1;
  #c2;
  #c3;
  
  constructor(colors) {
    [this.#c1, this.#c2, this.#c3] = colors.map(color => {
      let index = this.#COLORS.indexOf(color);
      if(index == -1) throw new Error('invalid color');
      return index;
    });
    this.label = this.makeLabel();
  }

  makeLabel() {
    let result = (this.#c1 * 10 + this.#c2) * 10 ** this.#c3;
    let count = 0;
    while(result && result % 1000 === 0) {
      count++;
      result /= 1000;
    }
    return `Resistor value: ${result} ${this.#MAGNITUDES[count]}ohms`;
  }
}