import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './Search.module.css';
import {changeSearchQuery} from "../../store/items/itemsActions";
import {createMatrix} from "../../utils";
import {CARDS_ON_PAGE} from "../../constants";

const Search = () => {
    const dispatch = useDispatch()
    const itemsBySearch = (useSelector(state => state.items.fetchedItems)).slice()

    const changeHandler = (e) => {
        const searchingResult = itemsBySearch.filter(item => {
            return item.name.toLowerCase().startsWith(e.target.value.toLowerCase())
        })

        const pages = createMatrix(searchingResult, CARDS_ON_PAGE)

        const paginationValues = []

        for (let i = 1; i <= pages.length; i++) {
            paginationValues.push(i)
        }

        dispatch(changeSearchQuery({
            pages: pages,
            searchQuery: e.target.value,
            paginationValues: paginationValues
        }))
    }

    return (
        <input className={styles.input} onChange={changeHandler} type="text"/>
    )
}

export default Search
