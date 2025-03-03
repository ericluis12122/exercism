export const proverb = (...inputs) => {
  if(inputs.length === 0) return '';
  const hasQualifier = typeof inputs.at(-1) === 'object';
  const words = hasQualifier ? inputs.slice(0,-1) : inputs;
  const final = hasQualifier ? `${inputs.at(-1).qualifier} ${words[0]}` : words[0];
  const line = [];
  for (let i = 0; i < words.length - 1; i++)
    line.push(`For want of a ${words[i]} the ${words[i + 1]} was lost.`);
  line.push(`And all for the want of a ${final}.`);
  return line.join('\n');
};
