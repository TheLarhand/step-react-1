import React from 'react';
import BookCard from './BookCard';
import classes from "./classes/BookCards.module.css";

const BookCards = ({books}) => {
    return (
        <div className={classes.cards}>
            {books.map((book)=>
                <BookCard book={book}/>
            )}
        </div>
    );
}

export default BookCards;
