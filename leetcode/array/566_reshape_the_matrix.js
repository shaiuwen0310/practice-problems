/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if (r*c != mat.length*mat[0].length) {
        return mat
    }

    let arrList = []
    let reshape = Array(r).fill().map(() => Array(c));

    for (const i in mat) {
        for (let j = 0; j < mat[i].length; j++) {
        arrList.push(mat[i][j])
        }
    }
    console.log(arrList)
    
    let k = 0
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            reshape[i][j] = arrList[k]
            k++
        }
    }
    return reshape

};

let mat = [[1,2],[3,4]]
let r = 1
let c = 4
console.log(matrixReshape(mat, r, c))
