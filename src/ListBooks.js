import React, { Component } from 'react';
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired
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
            <BookShelf bookShelfTitle='Currently Reading' books={books}  shelf='currentlyReading'/>
            <BookShelf bookShelfTitle='Want to Read' books={books} shelf='wantToRead'/>
            <BookShelf bookShelfTitle='Read' books={books} shelf='read'/>
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
