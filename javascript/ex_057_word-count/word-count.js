export const countWords = (subtitle) => subtitle
.toLowerCase().match(/\w+('\w+)?/g)
.reduce((mapa,word) => ({...mapa, [word] : (mapa[word] ?? 0) + 1}), {});
