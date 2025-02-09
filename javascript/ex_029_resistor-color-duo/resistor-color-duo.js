const mapa = 'black,brown,red,orange,yellow,green,blue,violet,grey,white'.split(',');
export const decodedValue = colors => mapa.indexOf(colors[0]) * 10 + mapa.indexOf(colors[1]);
