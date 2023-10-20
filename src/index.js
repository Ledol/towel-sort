
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const result = []
    if (!matrix) {
        return result
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            matrix[i].map(el => {
                result.push(el)
            })
        } else {
            matrix[i].reverse().map(el => {
                result.push(el)
            })
        }
    }
    return result;
}
