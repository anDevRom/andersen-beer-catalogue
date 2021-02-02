export function createMatrix(arr, rowLength) {
    const matrix = []
    const array = arr.slice()

    while (array.length) {
        matrix.push(array.splice(0, rowLength))
    }

    return matrix
}

export async function createItemList() {
    const list = []

    for (let i = 1; i < 6; i++) {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=80`)
        const part = await response.json()
        list.push(...part)
    }

    return list
}

export function createPaginationList(pages) {
    const paginationValues = []

    for (let i = 1; i <= pages.length; i++) {
        paginationValues.push(i)
    }

    return paginationValues
}
