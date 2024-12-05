const mapa = [[1,/[AEIOULNRST]/gi], [2,/[DG]/gi], [3,/[BCMP]/gi], [4,/[FHVWY]/gi], [5,/K/gi], [8,/[JX]/gi], [10,/[QZ]/gi]];
export const score = word => mapa.reduce((count, [points, re]) => (word.match(re)?.length ?? 0) * points + count, 0);
