import React, {Component} from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired
  }
  render() {
    const {books, bookShelfTitle} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => <li key={book.id}>
              <Book title={book.title} author={book.authors[0]} imageWidth="128px" imageHeight="193px" imageSrc={book.imageLinks.smallThumbnail} shelf={book.shelf}/>
            </li>)}

          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
