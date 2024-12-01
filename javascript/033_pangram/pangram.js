export const isPangram = (sentence) => {
  if(sentence.length < 26) return false;
  let set_pangram = new Set();
  for (let letter of sentence)
    if (97 <= letter.toLowerCase().charCodeAt(0) && letter.toLowerCase().charCodeAt(0) <= 122)
      set_pangram.add(letter.toLowerCase());
  return set_pangram.size == 26;
};
