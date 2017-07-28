import React, { Component } from 'react';
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
  state = {
    books: []
  }
  constructor(props) {
    super(props);
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book,shelf)
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf bookShelfTitle='Currently Reading' books={this.state.books} shelf='currentlyReading' onUpdateBook={this.updateBook}/>
            <BookShelf bookShelfTitle='Want to Read' books={this.state.books} shelf='wantToRead' onUpdateBook={this.updateBook}/>
            <BookShelf bookShelfTitle='Read' books={this.state.books} shelf='read' onUpdateBook={this.updateBook}/>
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
