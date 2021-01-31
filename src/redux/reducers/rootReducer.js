import {combineReducers} from "redux";
import {itemsReducer} from "./itemsReducer";
import {basketReducer} from "./basketReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    items: itemsReducer,
    basket: basketReducer,
    app: appReducer
})
