export class Robot {
  #name;
  #usedNames;
  constructor() {
    this.#usedNames = [];
    this.#name = this.generateName();    
  }
  get name() {
    return this.#name;
  }
  generateName() {
    let name = '';
    do {
      let letter_one = String.fromCharCode(Math.floor(Math.random() * 25) + 65);
      let letter_two = String.fromCharCode(Math.floor(Math.random() * 25) + 65);
      let number = Math.floor(Math.random() * 1000).toString().padStart(3,'0');
      name = letter_one + letter_two + number;
    } while(this.#usedNames.includes(name));
    this.#usedNames.push(name);
    return name;
  }
  reset() {
    this.#name = this.generateName();
  }
}

Robot.releaseNames = () => {};
