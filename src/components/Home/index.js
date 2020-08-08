import React, { useState, useEffect } from 'react';
import api from '../../api';


const Home = () => {

  const [books, getBooks] = useState({});
  console.log('books', books);
    
  useEffect(() => {
    api.books('Ruby')
    .then(data => {
      getBooks(data);
      console.log('api response', data);
    })
  }, []);

  return (
    <div>
      <h1>This is home</h1>
    </div>
  )
}

export default Home;