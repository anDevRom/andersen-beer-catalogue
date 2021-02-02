import {CHANGE_PAGE, CHANGE_SEARCH_QUERY, FETCH_ITEMS, SORTING} from "./itemsActionTypes";
import {CARDS_ON_PAGE} from "../../constants";
import {createItemList, createMatrix, createPaginationList} from "../../utils";

export function fetchItems() {
    return async dispatch => {
        const items = await createItemList()

        const pages = createMatrix(items, CARDS_ON_PAGE)

        const paginationValues = createPaginationList(pages)

        dispatch({
            type: FETCH_ITEMS,
            payload: {
                items: items,
                pages: pages,
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
