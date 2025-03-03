export class DiffieHellman {
  constructor(p, g) {
    if(!this.isPrime(p) || !this.isPrime(g))
      throw new Error('Error');
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if(privateKey <= 1 || privateKey >= this.p)
      throw new Error('Error');
    return Math.pow(this.g, privateKey) % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return Math.pow(theirPublicKey, myPrivateKey) % this.p;
  }

  isPrime(n) {
    if(n < 3) return !!n;
    for (let i = 3; i <= n / 2; i+=2)
      if(n % i === 0) return false;
    return true;
  }
}
