export class Allergies {
  #allergies;
  #mapa = 'eggs peanuts shellfish strawberries tomatoes chocolate pollen cats'.split(' ');
  constructor(allergies) {
    this.#allergies = allergies.toString(2).slice(-8).padStart(8,0).split('').map(Number).reverse();
  }

  list() {
    return this.#mapa.filter((_,i) => this.#allergies[i]);
  }

  allergicTo(name) {
    return !!this.#allergies.at(this.#mapa.indexOf(name));
  }
}
