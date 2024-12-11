export const encode = (input, n) => {
  if (n === 1) return input;
  const output = new Array(n).fill('');
  let index = 0;
  let dir = 1;
  [...input].forEach(e => {
    output[index] += e;
    index += dir;
    if(index === 0 || index === n - 1)
      dir *= -1;
  });
  return output.join('');
};

export const decode = (input, n) => {
  if (n === 1) return input;
  const lengths = new Array(n).fill(0);
  let index = 0;
  let dir = 1;
  // Determinar la cantidad de caracteres en cada línea
  for (let i = 0; i < input.length; i++) {
    lengths[index]++;
    index += dir;
    if (index === 0 || index === n - 1)
      dir *= -1;
  }
  // Dividir el texto cifrado en las líneas originales
  const segments = [];
  let start = 0;
  for (let i = 0; i < n; i++) {
    segments.push(input.slice(start, start + lengths[i]));
    start += lengths[i];
  }
  // Reconstruir el texto original
  let output = '';
  index = 0;
  dir = 1;
  for (let i = 0; i < input.length; i++) {
    output += segments[index][0];
    segments[index] = segments[index].slice(1);
    index += dir;
    if (index === 0 || index === n - 1)
      dir *= -1;
  }
  return output;
};