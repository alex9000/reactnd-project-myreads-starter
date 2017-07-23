import React, {Component} from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static PropTypes = {
    bookShelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }
  render() {
    const {bookShelfTitle, books} = this.props
    let showingBooks
    const match = new RegExp('^' + bookShelfTitle.replace(/ +/g, "") + '$', 'i')
    showingBooks = books.filter(book => match.test(book.shelf))

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {showingBooks.length && showingBooks.map(book => <li key={book.id}>
              <Book title={book.title} author={book.authors[0]} imageWidth="128px" imageHeight="193px" imageSrc={book.imageLinks.smallThumbnail} shelf={book.shelf}/>
            </li>)}

          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
