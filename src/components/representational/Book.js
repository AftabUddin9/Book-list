import React from 'react';
import '../../stylesheets/Book.css';
import { Link } from 'react-router-dom';

const Book = ({ book, selectedBookHandler }) => {
    return (
        <div className="Book" onClick={() => selectedBookHandler(book.id)}>
            <h3>Book: {book.bookName}</h3>
            <h4>Writer: {book.writer}</h4>
        </div>

    );
}

export default Book;