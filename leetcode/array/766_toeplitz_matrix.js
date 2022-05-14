/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            console.log(matrix[i][j])
            if (matrix[i][j] != matrix[i-1][j-1]) {
                return false
            }
        }
    }
    return true
};

matrix = [[84]]
console.log(isToeplitzMatrix(matrix))
