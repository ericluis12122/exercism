export class Rational {
  constructor(numerator, denominator) {
    if (denominator === 0) throw new Error("Denominator cannot be zero");
    const x = Rational.gcd(numerator, denominator);
    this.numerator = (denominator < 0 ? -numerator : numerator) / x;
    this.denominator = Math.abs(denominator) / x;
  }

  des(other) {
    return other 
      ? [this.numerator, this.denominator, other.numerator, other.denominator]
      : [this.numerator, this.denominator];
  }

  static gcd(a, b) {
    while (b !== 0)
      [a, b] = [b, a % b];
    return Math.abs(a);
  };

  add(other) {
    const [a1, b1, a2, b2] = this.des(other);
    return new Rational(a1 * b2 + a2 * b1, b1 * b2);
  }

  sub(other) {
    const [a1, b1, a2, b2] = this.des(other);
    return new Rational(a1 * b2 - a2 * b1, b1 * b2);
  }

  mul(other) {
    const [a1, b1, a2, b2] = this.des(other);
    return new Rational(a1 * a2, b1 * b2);
  }

  div(other) {
    const [a1, b1, a2, b2] = this.des(other);
    if (a2 === 0) throw new Error("Cannot divide by zero");
    return new Rational(a1 * b2, a2 * b1);
  }

  abs() {
    const [a, b] = this.des();
    return new Rational(Math.abs(a), Math.abs(b));
  }

  exprational(n) {
    const [a, b] = this.des();
    if (a === 0 && n < 0) throw new Error("Cannot raise 0 to a negative power");
    return n >= 0
      ? new Rational(a ** n, b ** n)
      : new Rational(b ** Math.abs(n), a ** Math.abs(n));
  }

  expreal(n) {
    const [a, b] = this.des();
    return Number(Math.pow(n, a / b).toFixed(10));
  }
}