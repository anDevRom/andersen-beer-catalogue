import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchItems} from "../../redux/actions";
import Basket from "../Basket/Basket";
import Main from "../Main/Main";
import styles from './App.module.css';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchItems()))

    const basketIsVisible = useSelector(state => state.basket.basketIsVisible)

    return (
        <div className={styles.app}>
            {
                basketIsVisible ? <Basket /> : <Main />
            }
        </div>
    )
}

export default App;
