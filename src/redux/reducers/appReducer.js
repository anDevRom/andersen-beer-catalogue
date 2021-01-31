import {HIDE_REGISTRATION, SHOW_REGISTRATION} from "../types";

const initialState = {
    registrationIsVisible: false
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_REGISTRATION:
            return {
                ...state,
                registrationIsVisible: true
            }

        case HIDE_REGISTRATION:
                return {
                    ...state,
                    registrationIsVisible: false
                }

        default: return state
    }
}
