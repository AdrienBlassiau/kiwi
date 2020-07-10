const axios = require('axios');

const API_KEY = '0ec464bc3151bee6274e541b3030fa57';
const LANGUAGE = 'en-US';

const fetchType = {
  POPULAR: 'popular',
};

const popularUrl = (pageNumber) => {
  return (
    ' https://api.themoviedb.org/3/movie/popular?api_key=' +
    API_KEY +
    '&language=' +
    LANGUAGE +
    '&page=' +
    pageNumber
  );
};

const getMovies = (pageNumber,callback, type) => {
  let url = '';

  if (type === fetchType.POPULAR) {
    url = popularUrl(pageNumber);
  } else {
    url = popularUrl(pageNumber);
  }

  axios
    .get(popularUrl(pageNumber))
    .then((response) => {
      let data = response.data.results;
      callback(data);
    })
    .catch((error) => console.log(error));
};

// export default getMovies

module.exports = {
	getMovies,
};
