const SHARP = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const FLAT = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
const SHARP_TONICS = ["C", "G", "D", "A", "E", "B", "F#", "a", "e", "b", "f#", "c#", "g#", "d#"];
const INTERVALS = { m: 1, M: 2, A: 3 };

export class Scale {
  #tonic = "";

  constructor(tonic) {
    this.#tonic = tonic;
  }

  getScale() {
    return SHARP_TONICS.includes(this.#tonic) ? SHARP : FLAT;
  }

  chromatic() {
    const scale = this.getScale();
    const startIndex = scale.indexOf(this.#tonic[0].toUpperCase() + (this.#tonic[1] || ""));
    return [...scale.slice(startIndex), ...scale.slice(0, startIndex)];
  }

  interval(intervals) {
    const scale = this.chromatic();
    let index = 0;
    const result = [scale[index]];
    for (let interval of intervals) {
      index = (index + INTERVALS[interval]) % scale.length;
      result.push(scale[index]);
    }
    return result;
  }
}