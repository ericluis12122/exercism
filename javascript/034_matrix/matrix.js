export class Matrix {
  constructor(cadena_matrix) {
    this.matrix = cadena_matrix.split('\n');
  }

  get rows() {
    return this.matrix.map(row => row.split(' ').map(Number));
  }

  get columns() {
    return this.rows[0].map((_ , i) => this.rows.map(row => row[i]));
  }
}