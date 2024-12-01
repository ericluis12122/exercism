const mapa = {'mercury': 0.2408467,
              'venus': 0.61519726,
              'earth': 1.0,
              'mars': 1.8808158,
              'jupiter': 11.862615,
              'saturn': 29.447498,
              'uranus': 84.016846,
              'neptune': 164.79132
}
export const age = (planet, second) => {
  return Math.round(second / 31557600 / mapa[planet] * 100) / 100;
};
