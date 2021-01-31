import {
    ADD_TO_BASKET,
    CHANGE_PAGE,
    CHANGE_SEARCH_QUERY, CLOSE_BASKET,
    CREATE_PAGES,
    DELETE_FROM_BASKET,
    FETCH_ITEMS, HIDE_REGISTRATION, SHOW_BASKET, SHOW_REGISTRATION,
    SORTING
} from "./types";

export function fetchItems() {
    return async dispatch => {
        const list = []

        for (let i = 1; i < 6; i++) {
            const response = await fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=80`)
            const part = await response.json()
            list.push(...part)
        }

        //

        const matrix = []
        const items = list.slice()

        while (items.length) {
            matrix.push(items.splice(0, 50))
        }

        //

        const paginationValues = []

        for (let i = 1; i <= matrix.length; i++) {
            paginationValues.push(i)
        }

        dispatch({
            type: FETCH_ITEMS,
            payload: {
                items: list,
                pages: matrix,
                paginationValues: paginationValues
            }
        })
    }
}

export function createPages() {
    return {
        type: CREATE_PAGES
    }
}

export function changePage(pageNumber) {
    return {
        type: CHANGE_PAGE,
        payload: pageNumber
    }
}

export function sorting(param) {
    return {
        type: SORTING,
        payload: param
    }
}

export function changeSearchQuery(text) {
    return {
        type: CHANGE_SEARCH_QUERY,
        payload: text
    }
}

export function addToBasket(itemId) {
    return {
        type: ADD_TO_BASKET,
        payload: itemId
    }
}

export function deleteFromBasket(itemId) {
    return {
        type: DELETE_FROM_BASKET,
        payload: itemId
    }
}

export function showBasket() {
    return {
        type: SHOW_BASKET
    }
}

export function closeBasket() {
    return {
        type: CLOSE_BASKET
    }
}

export const showRegistration = () => ({type: SHOW_REGISTRATION})
export const hideRegistration = () => ({type: HIDE_REGISTRATION})
