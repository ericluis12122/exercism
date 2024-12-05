export const findAnagrams = (word, list) => {
  let word_lower = word.toLowerCase();
  return list.filter(e => {
    let e_lower = e.toLowerCase();
    return word_lower !== e_lower && word_lower.split('').sort().join('') === e_lower.split('').sort().join('');
  });
};
