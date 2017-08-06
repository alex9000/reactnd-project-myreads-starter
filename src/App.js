/*global state updateBook*/
import React, {Component} from 'react';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import {Route} from 'react-router-dom';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
    bookShelves: []
  }

  /**
  * @description get all books
  */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });
  }

  /**
  * @description update book
  * @param {string} updatedBook - The book being updated
  * @param {string} shelf - The new shelf
  */
  updateBook = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf).then((shelves) => {
      BooksAPI.getAll().then((books) => {
        this.setState({books});
      });
    });
  }

  render() {
    const { books} = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => (<ListBooks books={books} onUpdateBook={this.updateBook} />)}/>
        <Route path='/search' render={() => (<SearchBooks books={books} onUpdateBook={this.updateBook} />)}/>
      </div>
    );
  }
}

export default BooksApp;
