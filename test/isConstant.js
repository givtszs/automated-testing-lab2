const Matrix = require('../Matrix.js');
const { assert } = require('chai');

describe('isConstant', () => {
    it('should return true if a matrix is constant', () => {
        const matrix = new Matrix([[1, 1], [1, 1]]);
        assert.equal(Matrix.isConstant(matrix), true);
    });

    describe('should return false', () => {
        it('if elements are not the same', () => {
            const matrix = new Matrix([[1, 0], [1, 1]]);
            assert.equal(Matrix.isConstant(matrix), false);
        });

        describe('if parameter is', () => {
            function makeTest(matrix) {
                it(`${typeof matrix}`, function() {
                    assert.isFalse(Matrix.isConstant(matrix));
                });
            }

            makeTest(2);
            makeTest(2n);
            makeTest('two');
            makeTest(null);
            makeTest();
        });

        it('if matrix is empty', function() {
            const matrix = [[]];
            assert.isFalse(Matrix.isConstant(matrix));
        });
    });
});
