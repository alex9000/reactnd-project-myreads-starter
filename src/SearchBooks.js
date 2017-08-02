import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static PropTypes = {
    onUpdateBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({query: query})
  }

  componentDidUpdate() {
    //console.log(this.state)
    if (this.state.query ) {
      BooksAPI.search(this.state.query, 5).then((books) => {
        console.log(books)
        if (books.error !== 'empty query') {
          this.setState({books})
        }
      })
    }
  }

  render() {
    const {query, books} = this.state
    const {onUpdateBook} = this.props
  //  console.log(query)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  title={book.title}
                  author={book.author}
                  imageSrc={book.imageLinks.smallThumbnail}
                  imageWidth="128px"
                  imageHeight="193px"
                  onUpdateBook={onUpdateBook}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
