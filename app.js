const Matrix = require('./Matrix.js');

const m = new Matrix([[1, 2], [3, 4]]);
console.log(Matrix.isConstant(m));
console.log(m.splitByRows());
console.log(m.clear());
