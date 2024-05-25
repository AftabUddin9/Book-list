import React, { Component } from 'react';
import Book from '../representational/Book';
import { Link } from 'react-router-dom';

class BookList extends Component {
    render() {
        return this.props.books.map((book, index) => {
            return (
                <Link key={book.id} to={'/' + book.id} style={{ textDecoration: 'none', color: 'black' }}>
                    <Book book={book} selectedBookHandler={this.props.selectedBookHandler} />;
                </Link>
            );
        });
    }
}

// <Book
//     bookName={book.bookName}
//     writer={book.writer}
//     delete={() => props.deleteBookState(index)}
//     key={book.id}
//     inputName={(event) => props.changeWithInputState(event, index)}
// />


export default BookList;