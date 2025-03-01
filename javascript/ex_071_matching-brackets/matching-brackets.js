export const isPaired = (input) => {
  const mapa = {'(':')', '{':'}', '[':']'};
  const stack = [];
  for (let c of input) {
    if(c in mapa)
      stack.push(c);
    else if(Object.values(mapa).includes(c)) {
      if(mapa[stack.at(-1)] == c)
        stack.pop();
      else
        return false;
    }      
  }
  return !stack.length;
};
