import {ADD_TO_BASKET, CLOSE_BASKET, DELETE_FROM_BASKET, SHOW_BASKET} from "./basketActionTypes";

export const addToBasket = (itemId) => ({
    type: ADD_TO_BASKET,
    payload: itemId
});

export const deleteFromBasket = (itemId) => ({
    type: DELETE_FROM_BASKET,
    payload: itemId
});

export const showBasket = () => ({type: SHOW_BASKET});

export const closeBasket = () => ({type: CLOSE_BASKET});
