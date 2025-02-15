export const transform = old_data => {
  const new_data = {};
  for (let key in old_data)
    old_data[key].map(letter => new_data[letter.toLowerCase()] = Number(key));
  return new_data;
};
