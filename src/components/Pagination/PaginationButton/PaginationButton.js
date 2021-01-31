import React from 'react';
import styles from "../Pagination.module.css";

const PaginationButton = ({status, value, id, clickHandler}) => {

    return (
        <button
            disabled={status}
            className={styles.btn}
            id={id}
            onClick={(e) => clickHandler(e.target.id)}
        >{value}</button>
    )
}

export default PaginationButton;
