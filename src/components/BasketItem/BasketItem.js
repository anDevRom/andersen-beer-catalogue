import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteFromBasket} from "../../redux/actions";
import styles from './BasketItem.module.css';

const BasketItem = ({card}) => {
    const dispatch = useDispatch()
    const basketItems = useSelector(state => state.basket.basket)

    const checkboxHandler = (id) => {
        dispatch(deleteFromBasket(id))
    }

    return (
        <div className={styles.item}>
            <img className={styles.img} src={card['image_url']} alt=""/>
            <span>{card.name}</span>
            <input
                checked={basketItems.includes(card.id) ? true : false}
                onChange={(e) => checkboxHandler(card.id)}
                type="checkbox"/>
        </div>
    )
}

export default BasketItem;
