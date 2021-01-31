import React from 'react';
import {useDispatch} from "react-redux";
import {changeSearchQuery} from "../../redux/actions";
import styles from './Search.module.css';

const Search = () => {
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        dispatch(changeSearchQuery(e.target.value))
    }

    return (
        <input className={styles.input} onChange={changeHandler} type="text"/>
    )
}

export default Search
