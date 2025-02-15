export class ComplexNumber {
  #real;
  #imag;
  
  constructor(real, imag) {
    this.#real = real;
    this.#imag = imag;
  }

  get real() {
    return this.#real;
  }

  get imag() {
    return this.#imag;
  }

  add({ real, imag }) {
    return new ComplexNumber(
      this.#real + real, 
      this.#imag + imag
    );
  }

  sub({ real, imag }) {
    return new ComplexNumber(
      this.#real - real, 
      this.#imag - imag
    );
  }

  div({ real, imag }) {
    return new ComplexNumber(
      (this.#real * real + this.#imag * imag) / (real ** 2 + imag ** 2), 
      (this.#imag * real - this.#real * imag) / (real ** 2 + imag ** 2)
    );
  }

  mul({ real, imag }) {
    return new ComplexNumber(
      this.#real * real - this.#imag * imag, 
      this.#imag * real + this.#real * imag
    );
  }

  get abs() {
    return Math.sqrt(this.#real ** 2 + this.#imag ** 2);
  }

  get conj() {
    return new ComplexNumber(this.#real, -this.#imag);
  }

  get exp() {
    return new ComplexNumber(
      Math.E ** this.#real * Math.cos(this.#imag), 
      Math.E ** this.#real * Math.sin(this.#imag)
    );
  }
}