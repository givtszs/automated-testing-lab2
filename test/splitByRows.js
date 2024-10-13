const Matrix = require('../Matrix.js');
const { assert } = require('chai');

describe.only('splitByRows', () => {
    describe('should return two matrices', () => {
        function makeTest(rowsNumber) {
            it(`matrix with ${rowsNumber} rows`, () => {
                const matrix = new Matrix(rowsNumber);
                const expected = matrix.splitByRows();
                assert.equal(expected.length, 2);
                assert.equal(expected[0].cols, expected[1].cols);
                assert.isTrue(Matrix.isMtrx(expected[0]));
                assert.isTrue(Matrix.isMtrx(expected[1]));
            });
        }

        makeTest(2);
        makeTest(4);
        makeTest(6);
    });

    describe('should return null', () => {
        it('if number of rows is not even', () => {
            const matrix = new Matrix(3);
            assert.isNull(matrix.splitByRows());
        });
    });
});
