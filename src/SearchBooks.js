import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  static PropTypes = {
    onUpdateBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({query: query}, this.searchBooks(query))
  }

  searchBooks = (query) => {
    console.log('query: ' + query)
    if (query.length > 2) {
      BooksAPI.search(query).then((results) => {
        console.log(results)
        if (results.error !== 'empty query') {
          this.setState({searchResults: results})
        }
      })
    } else {
      this.setState({ searchResults: []})
    }
  }

  render() {
    const {query, searchResults} = this.state
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
            { searchResults.map((book) => (
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
