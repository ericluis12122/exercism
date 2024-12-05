export class Squares {
  constructor(number) {
    this.n = number;
  }

  get sumOfSquares() {
    return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
  }

  get squareOfSum() {
    return (this.n * (this.n + 1) / 2) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
