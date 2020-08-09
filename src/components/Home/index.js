import React, { useState, useEffect } from 'react';
import api from '../../api';
import Books from '../Books';
import styles from './home.css';

const Home = () => {

  const [books, getBooks] = useState({});
  const [value, setValue] = useState('');
    
  useEffect(() => {
    api.books('Harry Potter')
    .then(data => {
      getBooks(data);
    });
  }, []);

  const onInputChange = e => {
    const { value } = e.target;
    setValue(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    api.books(value)
      .then(data => {
        getBooks(data);
    });
    setValue('');
  };

  const {
    list,
  } = books;

  return (

    <div>
      <h1>Use search box to search for your favorite books or enjoy Harry Potter</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          onChange={onInputChange}
          value={value}
          name="search"
        />
        <button
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      <Books
        list = {list}
      />
    </div>
  )
}

export default Home;