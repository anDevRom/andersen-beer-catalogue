import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "../Card/Card";
import {addToBasket, deleteFromBasket} from "../../redux/actions";
import styles from './Page.module.css';

const Page = () => {
    const cards = useSelector(state => state.items.pages[state.items.currentPage - 1])
    const basketItems = useSelector(state => state.basket.basket)

    const dispatch = useDispatch()

    const checkboxHandler = (id, status) => {
        status ? dispatch(addToBasket(id)) : dispatch(deleteFromBasket(id))
    }

    return (
        <div className={styles.page}>
            {
                cards ?
                    cards.map(card => (
                        <Card
                            checkBoxHandler={checkboxHandler}
                            card={card}
                            key={card.id}
                            status={basketItems.includes(card.id) ? true : false}/>
                    )) : null
            }
        </div>
    )

}

export default Page;
