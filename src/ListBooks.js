import React, {Component} from 'react';
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

/**
* @description Main Book Shelf View
*/

class ListBooks extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    const { books, onUpdateBook } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf bookShelfTitle='Currently Reading' books={books} shelf='currentlyReading' onUpdateBook={onUpdateBook}/>
            <BookShelf bookShelfTitle='Want to Read' books={books} shelf='wantToRead' onUpdateBook={onUpdateBook}/>
            <BookShelf bookShelfTitle='Read' books={books} shelf='read' onUpdateBook={onUpdateBook}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' >Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
