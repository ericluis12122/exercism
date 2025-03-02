export const score = (dices, category) => {
  return calc_score[category](dices.sort());
};
const calc_score = {
  'ones': d => d.filter(e => e === 1).length,
  'twos': d => d.filter(e => e === 2).length * 2,
  'threes': d => d.filter(e => e === 3).length * 3,
  'fours': d => d.filter(e => e === 4).length * 4,
  'fives': d => d.filter(e => e === 5).length * 5,
  'sixes': d => d.filter(e => e === 6).length * 6,
  'full house': d => (d[0] !== d[4] && (d[0] === d[1] && d[2] === d[4] || d[0] === d[2] && d[3] === d[4])) ? calc_score['choice'](d) : 0,
  'four of a kind': d => (d[0] === d[3] || d[1] === d[4]) ? d[2] * 4 : 0,
  'little straight': d => (d[0]===1 && d.every((e,i,d) => (i===0 || e===d[i-1]+1))) ? 30 : 0,
  'big straight': d => (d[0]===2 && d.every((e,i,d) => (i===0 || e===d[i-1]+1))) ? 30 : 0,
  'choice': d => d.reduce((sum, e) => sum + e, 0),
  'yacht': d => d[0] === d[4] ? 50 : 0
};
