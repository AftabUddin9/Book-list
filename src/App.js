import React from 'react';
import './App.css';
// import Book from './components/Book.js';
import MainComponent from './components/MainComponent.js';
// import Person from './components/Person';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
};

export default App;
