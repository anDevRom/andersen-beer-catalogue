import {ADD_TO_BASKET, CLOSE_BASKET, DELETE_FROM_BASKET, SHOW_BASKET} from "../types";

const initialState = {
    basket: [],
    basketIsVisible: false
}

export function basketReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {
                ...state,
                basket: state.basket.concat([action.payload])
            }
        case DELETE_FROM_BASKET:
            const itemIdx = state.basket.indexOf(action.payload)
            const newBasket = state.basket.slice()
            newBasket.splice(itemIdx, 1)

            return {
                ...state,
                basket: newBasket
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
