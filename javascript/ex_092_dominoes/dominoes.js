export const chain = (dominoes) => {
  if (!dominoes || dominoes.length === 0) return [];
  return tryChain(dominoes, []);
};

const tryChain = (dominoes, chainList) => {
  if (dominoes.length === 0 && chainList[0][0] === chainList.at(-1)[1])
    return chainList;
  for (let i = 0; i < dominoes.length; i++) {
    const [a,b] = dominoes[i];
    const newChainList = [...chainList];
    if(chainList.length === 0 || chainList.at(-1)[1] === a)
      newChainList.push([a, b]);
    else if(chainList.at(-1)[1] === b)
      newChainList.push([b, a]);
    else continue;
    const newDominoes = dominoes.slice(0, i).concat(dominoes.slice(i + 1));
    const output = tryChain(newDominoes, newChainList);
    if(output) return output;
  }
  return null;
}