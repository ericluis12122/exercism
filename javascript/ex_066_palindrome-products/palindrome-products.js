export class Palindromes {
  static generate(rango) {
    if(rango.minFactor > rango.maxFactor)
      throw new Error('min must be <= max');
    const output = {};
    let mayor = -Infinity;
    let menor = Infinity;
    for (let i = rango.minFactor; i <= rango.maxFactor; i++) {
      for (let j = i; j <= rango.maxFactor; j++) {
        let product = i * j;
        if(Palindromes.isPalindrome(product)) {
          if(Object.keys(output).includes(product.toString()))
            output[product].push([i, j]);
          else
            output[product] = [[i, j]];
          if(mayor < product) mayor = product;
          if(menor > product) menor = product;
        }
      }
    }
    return {smallest: {value: (menor === Infinity ? null : menor), 
                       factors: output[menor] || []}, 
            largest: {value: (mayor === -Infinity ? null : mayor), 
                      factors: output[mayor] || []}};
  }
  static isPalindrome = n => {
    const cadena = n.toString();
    let len = cadena.length / 2;
    for (let index = 0; index < len; index++)
      if(cadena[index] !== cadena.at(-(index + 1)))
        return false;
    return true;
  };
}
