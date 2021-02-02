import {CHANGE_PAGE, CHANGE_SEARCH_QUERY, FETCH_ITEMS, SORTING} from "./itemsActionTypes";

const initialState = {
    fetchedItems: [],
    pages: [],
    paginationValues: [],
    currentPage: 1,
    sortingParam: 'default',
    searchQuery: ''
}

export function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                fetchedItems: action.payload.items,
                pages: action.payload.pages,
                paginationValues: action.payload.paginationValues
            }

        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case SORTING:
            return {
                ...state,
                fetchedItems: action.payload.fetchedItems,
                pages: action.payload.pages,
                sortingParam: action.payload.sortingParam
            }

        case CHANGE_SEARCH_QUERY:
            return {
                ...state,
                pages: action.payload.pages,
                searchQuery: action.payload.searchQuery,
                paginationValues: action.payload.paginationValues
            }

        default: return state
    }
}
