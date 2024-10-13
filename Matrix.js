const Mtrx = require('mtrx');
const every = require('mtrx/src/every');

class Matrix extends Mtrx {
    static isConstant(matrix) {
        if (!this.isMtrx(matrix) || !this.isMtrxLike(matrix)) {
            return false;
        }
        const firstElement = matrix[0][0];
        return every(matrix, (c, i, j) => c === firstElement);
    } 

    clear() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this[i][j] = 0;
            }
        } 
        return this;
    }

    splitByRows() {
        if (this.rows % 2 !== 0) {
            return null;
        }

        const result = [
            new Matrix(this.rows / 2, this.cols, 0),
            new Matrix(this.rows / 2, this.cols, 0)
        ];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (i < this.rows / 2) {
                    result[0].set(i, j, this[i][j]);
                } else {
                    result[1].set(i - this.rows / 2, j, this[i][j]);
                }
            } 
        }
        return result;
    }
}

module.exports = Matrix;