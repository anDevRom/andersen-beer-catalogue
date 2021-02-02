import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './Sorting.module.css';
import {sorting} from "../../store/items/itemsActions";
import {createMatrix} from "../../utils";
import {CARDS_ON_PAGE} from "../../constants";

const Sorting = () => {
    const dispatch = useDispatch()
    const fetchedItems = useSelector(state => state.items.fetchedItems)
    const itemsBySort = fetchedItems.slice()

    function changeHandler(e) {
        const sortedItems = itemsBySort.sort((a, b) => (
            e.target.value === 'default' ? a.id - b.id : a[e.target.value] - b[e.target.value]
        ))

        dispatch(sorting({
            fetchedItems: sortedItems,
            pages: createMatrix(sortedItems, CARDS_ON_PAGE),
            sortingParam: e.target.value
        }))
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
