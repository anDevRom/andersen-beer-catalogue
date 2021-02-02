import {CHANGE_PAGE, CHANGE_SEARCH_QUERY, CREATE_PAGES, FETCH_ITEMS, SORTING} from "./itemsActionTypes";
import {CARDS_ON_PAGE} from "../../constants";

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
            matrix.push(items.splice(0, CARDS_ON_PAGE))
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

export function changePage(pageNumber) {
    return {
        type: CHANGE_PAGE,
        payload: pageNumber
    }
}

export function sorting(newData) {
    return {
        type: SORTING,
        payload: newData
    }
}

export function changeSearchQuery(newData) {
    return {
        type: CHANGE_SEARCH_QUERY,
        payload: newData
    }
}
