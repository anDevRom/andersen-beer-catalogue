import React from 'react';
import styles from './Main.module.css';
import {useDispatch, useSelector} from "react-redux";
import Page from "../Page/Page";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import Sorting from "../Sorting/Sorting";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import {showBasket} from "../../store/basket/basketActions";
import {hideRegistration, showRegistration} from "../../store/app/appActions";

const Main = () => {
    const dispatch = useDispatch()

    const registrationIsVisible = useSelector(state => state.app.registrationIsVisible)

    const basketBtnHandler = () => dispatch(showBasket())
    const registrationBtnHandler = () => dispatch(showRegistration())
    const registrationHandler = (id) => id === 'registration-container' ? dispatch(hideRegistration()) : null

    const closeRegistration = () => dispatch(hideRegistration())

    return (
        <div className={styles.main}>
            <div className={`${styles.search} ${styles.cell}`}>
                <b>SEARCH</b><Search />
            </div>
            <div className={`${styles.sort} ${styles.cell}`}>
                <b>SORT BY</b><Sorting />
            </div>
            <div className={`${styles.registrationBtn} ${styles.cell}`}>
                <button className={styles.btn} onClick={registrationBtnHandler}>REGISTRATION</button>
            </div>
            <div className={styles.page}>
                <Page />
            </div>
            <div className={`${styles.pagination} ${styles.cell}`}>
                <Pagination />
            </div>
            <div className={`${styles.basket} ${styles.cell}`}>
                <button className={styles.btn} onClick={basketBtnHandler}>BASKET</button>
            </div>
            {
                registrationIsVisible ? (
                    <div id="registration-container"
                         className={styles.registration}
                         onClick={(e) => registrationHandler(e.target.id)}>
                        <RegistrationForm closeRegistration={closeRegistration} />
                    </div>
                ) : null
            }
        </div>
    )
}

export default Main;
