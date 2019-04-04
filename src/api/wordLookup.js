import axios from 'axios';

const KEY = '1.054209701387315e30';

export default axios.create({
  baseURL: 'http://www.wordgamedictionary.com/api/v1/references/scrabble/',
  params: {
    key: KEY
  }
});
