
const Matrix = require('../Matrix.js');
const { assert } = require('chai');

describe('clear', () => {
    it('should return matrix with all elements set to 0', () => {
        const matrix = new Matrix([[1, 1], [1, 1]]);
        const expected = Matrix.zeros(2, 2);
        assert.equal(Matrix.equalAll(matrix.clear(), expected), true);
    });
});
