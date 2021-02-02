export function createMatrix(arr, rowLength) {
    const matrix = []
    const array = arr.slice()

    while (array.length) {
        matrix.push(array.splice(0, rowLength))
    }

    return matrix
}
