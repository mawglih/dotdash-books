import axios from 'axios';

const apiUrl = 'https://cors-anywhere.herokuapp.com/https://goodreads-server-express--dotdash.repl.co/search/';


export default {
  books: term => {
    return axios({
      url: apiUrl+term, 
      method: 'GET',
    })
    .then(response => response.data);
  }
} 