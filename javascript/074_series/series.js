export class Series {
  constructor(series) {
    if(!series) throw new Error('series cannot be empty');
    this.cadena = Array.from(series).map(Number);
  }

  slices(sliceLength) {
    if(sliceLength == 0) throw new Error('slice length cannot be zero');
    if(sliceLength < 0)  throw new Error('slice length cannot be negative');
    if(this.cadena.length < sliceLength) 
      throw new Error('slice length cannot be greater than series length');
    const output = [];
    for (let i = 0; i < this.cadena.length - sliceLength + 1; i++)
      output.push(this.cadena.slice(i, i + sliceLength));
    return output;
  }
}
