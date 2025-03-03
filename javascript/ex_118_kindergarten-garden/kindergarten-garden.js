const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this._students = students.sort();
    this._diagram = diagram.split('\n');
  }

  plants(student) {
    let index = this._students.indexOf(student) * 2;
    return [
      PLANT_CODES[this._diagram[0][index]],
      PLANT_CODES[this._diagram[0][index + 1]],
      PLANT_CODES[this._diagram[1][index]],
      PLANT_CODES[this._diagram[1][index + 1]]
    ];
  }
}
