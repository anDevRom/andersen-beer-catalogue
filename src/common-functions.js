export function createMatrix(arr, rowLength) {
    const matrix = []

    while (arr.length) {
        matrix.push(arr.splice(0, rowLength))
    }

    return matrix
}
