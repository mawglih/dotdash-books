import React from 'react';
import Book from '../Book';
import styles from './books.css';

const Books = ({
  list,
}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
          {list && list.map((item,index) => {
            return (
              <div key={index} className={styles.item}>
                <Book
                  author={item.authorName}
                  title={item.title}
                  image={item.imageUrl}
                />
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Books;
