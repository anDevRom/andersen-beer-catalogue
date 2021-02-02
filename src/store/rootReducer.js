import {combineReducers} from "redux";
import {itemsReducer} from "./items/itemsReducer";
import {basketReducer} from "./basket/basketReducer";
import {appReducer} from "./app/appReducer";

export const rootReducer = combineReducers({
    items: itemsReducer,
    basket: basketReducer,
    app: appReducer
})
