import {CHANGE_PAGE, CHANGE_SEARCH_QUERY, CREATE_PAGES, FETCH_ITEMS, SORTING} from "../types";
import {createMatrix} from "../../common-functions";

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
        case CREATE_PAGES:
            return {
                ...state,
                pages: createMatrix(state.fetchedItems.slice(), 50)
            }
        case CHANGE_PAGE:
            let pageNumber

            switch (action.payload) {
                case 'back':
                    pageNumber = state.currentPage - 1
                    break

                case 'forward':
                    pageNumber = state.currentPage + 1
                    break

                default: pageNumber = Number(action.payload)
            }

            return {
                ...state,
                currentPage: pageNumber
            }
        case SORTING:
            const itemsBySort = state.fetchedItems.slice()
            const sortedItems = itemsBySort.sort((a, b) => (
                action.payload === 'default' ? a.id - b.id : a[action.payload] - b[action.payload]
            ))

            return {
                ...state,
                fetchedItems: sortedItems.slice(),
                pages: createMatrix(sortedItems, 50),
                sortingParam: action.payload
            }
        case CHANGE_SEARCH_QUERY:
            const itemsBySearch = state.fetchedItems.slice()
            const searchingResult = itemsBySearch.filter(item => {
                return item.name.toLowerCase().startsWith(action.payload.toLowerCase())
            })

            const pages = createMatrix(searchingResult, 50)

            const paginationValues = []

            for (let i = 1; i <= pages.length; i++) {
                paginationValues.push(i)
            }

            return {
                ...state,
                pages: pages,
                searchQuery: action.payload,
                paginationValues: paginationValues
            }
        default: return state
    }
}
