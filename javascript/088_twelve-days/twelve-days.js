const MAPA = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

const LAST = 'On the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.';

export const recite = (start, end) => {
  if(!end) end = start;
  const output = [];
  for (let i = start; i <= end; i++) {
    output.push(create(i));
  }
  return output.join('\n');
};

const create = i => {
  let [header, body] = LAST.split(': ');
  body = body.split(', ').slice(12 - i).join(', ');
  header = header.replace('twelfth', MAPA[i - 1]);
  return header + ': ' + (i == 1 ? body.slice(4) : body) + '\n';
};
