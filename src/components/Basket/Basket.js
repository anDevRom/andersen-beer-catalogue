import React from 'react';
import BasketItem from "../BasketItem/BasketItem";
import {useDispatch, useSelector} from "react-redux";
import {closeBasket} from "../../redux/actions";
import styles from './Basket.module.css';

const Basket = () => {
    const dispatch = useDispatch()
    const itemsIds = useSelector(state => state.basket.basket)
    const items = useSelector(state => state.items.fetchedItems).slice()
    const itemsForRendering = items.filter(item => itemsIds.includes(item.id))

    const btnClickHandler = () => {
        dispatch(closeBasket())
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Basket:</h3>
                <button className={styles.btn} onClick={btnClickHandler}>Close basket</button>
            </div>
            {
                itemsForRendering.map(item => <BasketItem card={item} />)
            }
        </div>
    )
}

export default Basket;
