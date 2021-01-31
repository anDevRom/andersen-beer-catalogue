import React from 'react';
import {useDispatch} from "react-redux";
import {sorting} from "../../redux/actions";
import styles from './Sorting.module.css';

const Sorting = () => {
    const dispatch = useDispatch()

    function changeHandler(e) {
        dispatch(sorting(e.target.value))
    }

    return (
        <select className={styles.input} onChange={changeHandler}>
            <option defaultValue={'default'} value="default">Default</option>
            <option value="abv">ABV</option>
            <option value="ibu">IBU</option>
            <option value="ebc">EBC</option>
        </select>
    )
}

export default Sorting;
