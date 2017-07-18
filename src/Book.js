import React from 'react';
import BookShelfChanger from './BookShelfChanger'

const Book = (props) => (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: `${props.imageWidth}`, height: `${props.imageHeight}`, backgroundImage: `url(${props.imageSrc})` }}></div>
          <BookShelfChanger />
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.author}</div>
      </div>
    )

export default Book
