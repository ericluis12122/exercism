export class List {
  constructor(collection = []) {
    this.values = [...collection];
    this.size = collection.length;
  }

  append(element) {
    if(element instanceof List)
      for (let item of element.values)
        this.values[this.size++] = item;
    else
      this.values[this.size++] = element;
    return this;
  }

  concat(...lists) {
    const flatten = (arr) => {
      if(arr instanceof List)
        for (let i of arr.values)
          flatten(i);
      else
        this.values[this.size++] = arr;
    };
    for (let item of lists)
      flatten(item);
    return this;
  }

  filter(predicate) {
    const new_list = new List();
    for (let item of this.values)
      if(predicate(item))
        new_list.append(item);
    return new_list;
  }

  map(predicate) {
    const new_list = new List();
    for (let item of this.values)
      new_list.append(predicate(item));
    return new_list;
  }

  length() {
    return this.size;
  }

  foldl(predicate, acc) {
    for (let item of this.values)
      acc = predicate(acc, item);
    return acc;
  }

  foldr(predicate, acc) {
    for (let index = this.size - 1; index >= 0; index--)
      acc = predicate(acc, this.values[index]);
    return acc;
  }

  reverse() {
    const new_list = new List();
    for (let index = this.size - 1; index >= 0; index--)
      new_list.append(this.values[index]);
    return new_list;
  }
}
