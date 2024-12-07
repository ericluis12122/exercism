export const parse = phrase => phrase
  .replace(/['_]/g,'')
  .replace(/[^\w]|\B\w/g,'')
  .toUpperCase();
