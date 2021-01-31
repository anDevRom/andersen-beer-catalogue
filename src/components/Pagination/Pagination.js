import React from 'react';
import {changePage} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import styles from './Pagination.module.css';
import PaginationButton from "./PaginationButton/PaginationButton";

const Pagination = () => {
    const dispatch = useDispatch()

    const paginationValues = useSelector(state => state.items.paginationValues);
    const currentPage = useSelector(state => state.items.currentPage)

    function clickHandler(id) {
        dispatch(changePage(id))
    }

    return (
        <div className={styles.pagination}>
            <PaginationButton
                status={currentPage === 1 ? true : false}
                value='<'
                id='back'
                clickHandler={clickHandler}
            />
            {
                paginationValues.map(value => <PaginationButton
                    status={value === currentPage ? true : false}
                    value={value}
                    key={value}
                    id={value}
                    clickHandler={clickHandler}
                />)
            }
            <PaginationButton
                status={currentPage === paginationValues.length ? true : false}
                value='>'
                id='forward'
                clickHandler={clickHandler}
            />
        </div>
    )
}

export default Pagination;


