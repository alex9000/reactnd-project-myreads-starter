import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {
  static PropTypes = {
    book: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  state = {
    shelf: this.props.shelf
  }

  handleChange = (e) => {
    this.props.onUpdateBook(this.props.book, e.target.value)
  }
  // TODO: render multiple authors

  render() {
    const { title, author, imageWidth, imageHeight, shelf, imageSrc } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: `${imageWidth}`, height: `${imageHeight}`, backgroundImage: `url(${imageSrc})` }}></div>
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    )
  }
}

export default Book
