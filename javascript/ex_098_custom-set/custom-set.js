export class CustomSet {
  constructor(input = []) {
    this.map = new Map();
    for (const value of input)
      this.add(value);
  }

  size() {
    return this.map.size;
  }
  
  empty() {
    return this.map.size === 0;
  }

  contains(value) {
    return this.map.has(value);
  }

  add(value) {
    if (!this.map.has(value))
      this.map.set(value, true);
    return this;
  }

  [Symbol.iterator]() {
    return this.map.keys();
  }
  
  subset(otherSet) {
    for (const value of this)
      if (!otherSet.contains(value)) 
        return false;
    return true;
  }

  disjoint(otherSet) {
    return this.intersection(otherSet).empty();
  }

  eql(otherSet) {
    return this.size() === otherSet.size() && this.subset(otherSet);
  }

  union(otherSet) {
    const result = new CustomSet();
    for (const value of this) 
      result.add(value);
    for (const value of otherSet) 
      result.add(value);
    return result;
  }

  intersection(otherSet) {
    const result = new CustomSet();
    for (const value of this)
      if (otherSet.contains(value)) 
        result.add(value);
    return result;
  }

  difference(otherSet) {
    const result = new CustomSet();
    for (const value of this)
      if (!otherSet.contains(value)) 
        result.add(value);
    return result;
  }
}