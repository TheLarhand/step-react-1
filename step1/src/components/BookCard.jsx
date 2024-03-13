import React from 'react';
import classes from "./classes/BookCard.module.css";

const BookCard = ({book}) => {
    return (
        <div className={classes.card}>
            <img src={book.image} alt="book image" />
            <h3>{book.title}</h3>
            <p>{book.body}</p>
        </div>
    );
}

export default BookCard;
