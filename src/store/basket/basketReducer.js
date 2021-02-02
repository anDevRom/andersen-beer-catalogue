import {ADD_TO_BASKET, CLOSE_BASKET, DELETE_FROM_BASKET, SHOW_BASKET} from "./basketActionTypes";


const initialState = {
    basket: [],
    basketIsVisible: false
}

export function basketReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: action.payload
            }
        case DELETE_FROM_BASKET:
            return {
                ...state,
                basket: action.payload
            }
        case SHOW_BASKET:
            return {
                ...state,
                basketIsVisible: true
            }
        case CLOSE_BASKET:
            return {
                ...state,
                basketIsVisible: false
            }
        default: return state
    }
}
