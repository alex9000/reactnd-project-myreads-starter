import React, { Component } from 'react';
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired
  }
  filterBooks(books, shelf) {
    const match = new RegExp(shelf, 'i')
    return books.filter(book => match.test(book.shelf))
  }
  render() {
    const { books } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelf='Currently Reading' books={this.filterBooks(books, 'currentlyReading')}/>
            <BookShelf shelf='Want to Read' books={this.filterBooks(books, 'wantToRead')}/>
            <BookShelf shelf='Read' books={this.filterBooks(books, '^read$')}/>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks
