import React, { Component } from 'react';
import bookList from '../assets/books.js'
import BookList from './lists/BookList.js';
import NewBook from './representational/NewBook.js';
import { Routes, Route, NavLink } from 'react-router-dom';
import BookDetail from './representational/BookDetail.jsx';
import { Navigate } from 'react-router-dom';
// import SignIn from './auth/SignIn.jsx';
// import PrivateRoute from './auth/PrivateRoute.jsx';

class MainComponent extends Component {
    // state
    // constructor(){
    //   super();
    //   this.state = {};
    // }
    // version 16.8
    state = {
        books: bookList,
        selectedBook: null,
        // showBooks: true

        // otherProp: "I am some other Property"
    };

    selectedBookHandler = (bookId) => {
        const book = this.state.books.filter((book) => book.id === bookId)[0];
        this.setState({ selectedBook: book, });
    };

    // changeBookState = (newBookName) => {
    //   // Wrong: this.state.books[0].bookName = "1974"; X
    //   this.setState({
    //     books: [
    //       { bookName: newBookName, writer: "George Orwell" },
    //       { bookName: "The Da Vinci Code", writer: "Dan Brown" },
    //       { bookName: "Metamorphosis", writer: "Frans Kafka" }
    //     ]
    //   });
    // }

    // deleteBookState = (index) => {
    //     // const books = this.state.books.slice();
    //     // const books = this.state.books.map(item => item);
    //     const books = [...this.state.books];
    //     books.splice(index, 1);
    //     this.setState({ books: books });
    // };

    // toggleBooks = () => {
    //     this.setState({ showBooks: !this.state.showBooks });
    // }

    // changeWithInputState = (event, index) => {
    //     const book = {
    //         ...this.state.books[index]
    //     }

    //     book.bookName = event.target.value;
    //     const books = [...this.state.books];
    //     books[index] = book;
    //     this.setState({ books: books });
    //     // this.setState({
    //     //   books: [
    //     //     { bookName: event.target.value, writer: "George Orwell" },
    //     //     { bookName: "The Da Vinci Code", writer: "Dan Brown" },
    //     //     { bookName: "Metamorphosis", writer: "Frans Kafka" }
    //     //   ]
    //     // });
    // }

    render() {
        // for applying CSS
        // write JS object, React will convert into CSS
        // const style = {
        //     border: "1px solid red",
        //     borderRadius: "5px",
        //     backgroundColor: "black",
        //     color: "white",
        // };

        // const booksState = this.state.books;

        const books = <BookList
            books={this.state.books}
            selectedBookHandler={this.selectedBookHandler} />;

        return (
            <div className="App">
                <nav className='nav-bar'>
                    <ul>
                        {/* <li>
                            <NavLink to='/'>Sign In</NavLink>
                        </li> */}
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/new-book'>New Book</NavLink>
                        </li>
                    </ul>
                </nav>
                {/* <h1 style={style}>Book List</h1> */}
                {/* <button onClick={this.toggleBooks}>Toggle Books</button>
                {books} */}
                {/* <button onClick={() => this.changeBookState("1974")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState} /> */}
                {/* {books} */}
                {/* <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} inputName={this.changeWithInputState} />
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
        <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} change={this.changeBookState.bind(this, "999")} /> */}

                <Routes>
                    {/* <Route path='/' element={<SignIn />}></Route> */}

                    <Route path='/' element={<Navigate to="/books/" />}></Route>
                    <Route path='/books' element={books}></Route>
                    <Route path='/new-book' element={<NewBook />}></Route>
                    <Route path='/:id' element={<BookDetail book={this.state.selectedBook} />}></Route>

                    {/* for private/guard route
                    <Route element={<PrivateRoute />}>
                        <Route path='/books' element={books}></Route>
                        <Route path='/new-book' element={<NewBook />}></Route>
                    </Route> */}

                </Routes>

            </div>
        );
    }
}

// Functional Component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <Person />
//     </div>
//   );
//   // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "Hello World!"), <Person />);
// }

// Class Component
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World!</h1>
//         <Person name="Rahim" age="30"> I am some info of Person. </Person>
//         <Person name="Fahim" age="28" />
//         <Person name="Tamim" age="32" />
//       </div>
//     );
//   }
// }

export default MainComponent;