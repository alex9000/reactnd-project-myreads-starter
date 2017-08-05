/*global state updateQuery searchBooks*/
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

/**
* @description Search View
*/
class SearchBooks extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchResults: []
  }

  /**
  * @description onChange handler for search field
  * @constructor
  * @param {string} query - The search query
  */
  updateQuery = (query) => {
    this.setState({query: query}, this.searchBooks(query));
  }

  /**
  * @description wrapper for BooksAPI.search that maps search results to
  * state of books on book shelf
  * @constructor
  * @param {string} query - The search query
  */
  searchBooks = (query) => {
    console.log('query: ' + query);
    if (query.length > 2) {
      BooksAPI.search(query).then((results) => {
        if (results.error !== 'empty query') {
          this.setState({
            searchResults: results.map((r) => {
              // Match search results to books in book shelf
              const match = this.props.books.filter((b) => b.id === r.id);
              if (typeof match !== 'undefined' && match.length > 0) {
                r.shelf = match[0].shelf;
              } else {
                r.shelf = 'none';
              }
              return r;
            })
          });
        }
      });
    } else {
      this.setState({ searchResults: []});
    }
  }

  render() {
    const {query, searchResults} = this.state;
    const {onUpdateBook} = this.props;
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
            { searchResults.map((result) => (
              <li key={result.id}>
                <Book
                  book={result}
                  shelf={result.shelf}
                  title={result.title}
                  author={result.authors ? result.authors[0] : undefined}
                  imageSrc={result.imageLinks.smallThumbnail}
                  imageWidth="128px"
                  imageHeight="193px"
                  onUpdateBook={onUpdateBook}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
