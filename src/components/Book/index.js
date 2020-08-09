import React from 'react';
import styles from './book.css';

const Book = ({
  author,
  title,
  image,
}) => (
    <>
      <h5>Author: {author}</h5>
      <h5 className={styles.title}>Title: {title}</h5>
      <img src={image} alt="book"/>
    </>
)

export default Book;
