export function triplets({ minFactor = 1, maxFactor = Infinity, sum }) {
  const results = [];
  for (let a = minFactor; a < sum / 3; a++)
    for (let b = a + 1; b < sum / 2; b++) {
      const c = sum - a - b;
      if (c > b && c <= maxFactor && a ** 2 + b ** 2 === c ** 2)
        results.push(new Triplet(a, b, c));
    }
  return results;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}

