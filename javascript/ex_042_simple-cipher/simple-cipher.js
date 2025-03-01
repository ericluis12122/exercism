export class Cipher {
  constructor(key) {
    if (key && !/^[a-z]+$/.test(key))
      throw new Error("Key must contain only lowercase letters");
    this._key = key || this.generateRandomKey();
  }

  generateRandomKey(length = 100) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let key = "";
    for (let i = 0; i < length; i++)
      key += letters[Math.floor(Math.random() * letters.length)];
    return key;
  }

  get key() {
    return this._key;
  }

  encode(text) {
    return text
      .split("")
      .map((char, i) => {
        const shift = this._key.charCodeAt(i % this._key.length) - 97; // 'a' -> 0, 'b' -> 1, etc.
        return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
      })
      .join("");
  }

  decode(text) {
    return text
      .split("")
      .map((char, i) => {
        const shift = this._key.charCodeAt(i % this._key.length) - 97;
        return String.fromCharCode(((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97);
      })
      .join("");
  }
}