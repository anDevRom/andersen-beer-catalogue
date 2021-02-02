import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "../Card/Card";
import styles from './Page.module.css';
import {addToBasket, deleteFromBasket} from "../../store/basket/basketActions";
import {ONE} from "../../constants";

const Page = () => {
    const cards = useSelector(state => state.items.pages[state.items.currentPage - 1])
    const basketItems = useSelector(state => state.basket.basket)

    const dispatch = useDispatch()

    const checkboxHandler = (id, status) => {
        const itemIdx = basketItems.indexOf(id)
        const newBasket = basketItems.slice()

        switch (status) {
            case true:
                newBasket.push(id)
                dispatch(addToBasket(newBasket))
                break

            case false:
                newBasket.splice(itemIdx, 1)
                dispatch(deleteFromBasket(newBasket))
                break
            default: return
        }
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
