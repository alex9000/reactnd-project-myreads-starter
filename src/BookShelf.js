import React from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

const BookShelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelf}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => <li>
          <Book
          title={book.title}
          author={book.authors[0]}
          imageWidth="128px"
          imageHeight="193px"
          imageSrc={book.imageLinks.smallThumbnail}/>
        </li>
)}

      </ol>
    </div>
  </div>
);
BookShelf.PropTypes = {
  books: PropTypes.array.isRequired,
}

export default BookShelf
