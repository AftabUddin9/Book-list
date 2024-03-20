import React, { Component } from 'react';
import './App.css';
import Book from './components/Book.js';
// import Person from './components/Person';

class App extends Component {
  // state
  // constructor(){
  //   super();
  //   this.state = {};
  // }
  // version 16.8
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],
    otherProp: "I am some other Property"
  };

  changeBookState = (newBookName) => {
    // Wrong: this.state.books[0].bookName = "1974"; X
    this.setState({
      books: [
        { bookName: newBookName, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metamorphosis", writer: "Frans Kafka" }
      ]
    });
  }

  changeWithInputState = (event) => {
    this.setState({
      books: [
        { bookName: event.target.value, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metamorphosis", writer: "Frans Kafka" }
      ]
    });
  }

  render() {
    // for applying CSS
    // write JS object, React will convert into CSS
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white",
    };
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={() => this.changeBookState("1974")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState} />
        <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} inputName={this.changeWithInputState} />
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
        <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} change={this.changeBookState.bind(this, "999")} />
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

export default App;
