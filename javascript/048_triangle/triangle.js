export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = sides.sort((i1,i2) => i1 - i2);
    this.isTriangle = this.a > 0 && (this.a + this.b) >= this.c;
  }

  get isEquilateral() {
    return this.isTriangle && this.a === this.c;
  }

  get isIsosceles() {
    return this.isTriangle && (this.a === this.b || this.b === this.c);
  }

  get isScalene() {
    return this.isTriangle && !this.isIsosceles;
  }
}
