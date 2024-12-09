export const translate = (phrase) => {
  return phrase.split(' ').map(word => translate_word(word)).join(' ');
};
const translate_word = (word) => {
  let pattern = /^[aeiou]|^xr|^yt/;
  if(pattern.test(word))
    return word + 'ay';
  let index = 0;
  for (let i = 1; i < word.length; i++) {
    if('aeioyu'.includes(word[i])) {
      if(word[i] === 'u' && word[i - 1] === 'q')
        continue;
      index = i;
      break;
    }
  }
  return word.slice(index) + word.slice(0, index) + 'ay';
};
