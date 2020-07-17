const axios = require('axios');

const API_KEY = '0ec464bc3151bee6274e541b3030fa57';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1ZjBjOWJhYjBiNWQ5IiwiZXhwIjoiMjAyMC0wNy0xNSAxOTozNjo0MyIsInRlc3QiOiIrXC89In0.gfNEAHVJ2qF7tsddsm_gYVqK557sO3w1oxyIDHKZb8YrJlm6mY8UST95QavIUO7-bJFUj5SKZMvXKagG837ysQ';
const LANGUAGE = 'en-US';
const ADULT = false;

const fetchType = {
  POPULAR: 'popular',
  MOVIE: 'movie',
  SEARCH: 'search',
};

const popularUrl = (data) => {
  const [pageNumber, more] = data;

  return (
    ' https://api.themoviedb.org/3/movie/popular?api_key=' +
    API_KEY +
    '&language=' +
    LANGUAGE +
    '&page=' +
    pageNumber
  );
};

const movieUrl = (movieId) => {
  return (
    ' https://api.themoviedb.org/3/movie/' +
    movieId +
    '?api_key=' +
    API_KEY +
    '&append_to_response=release_dates,credits,images,translations'
  );
};

const searchUrl = (data) => {
  const [pageNumber, query] = data;

  return (
    ' https://api.themoviedb.org/3/search/movie?api_key=' +
    API_KEY +
    '&query=' +
    query +
    '&language=' +
    LANGUAGE +
    '&page=' +
    pageNumber +
    '&include_adult=' +
    ADULT
  );
};

const jokesUrl = 'https://api-light.com/api/get/random';

const getMovies = (data, callback, type, cache) => {
  let url = '';
  let key = '';

  console.log('On entre dans get movies');
  if (type === fetchType.POPULAR) {
    url = popularUrl(data);
    key = url;
  } else if (type === fetchType.MOVIE) {
    url = movieUrl(data);
    key = url;
  } else if (type === fetchType.SEARCH) {
    url = searchUrl(data);
    key = url;
  } else {
    url = movieUrl(data);
    key = url;
  }

  console.log(key);

  if (cache.cacheData[key] != undefined) {
    console.log('Dans le chache !');
    let dataToRetrieve = cache.cacheData[key].data;
    callback(dataToRetrieve, key);
  } else {
    console.log('Pas dans le chache ! : ', key);
    axios
      .get(url)
      .then((response) => {
        let data = null;
        if (type === fetchType.POPULAR) {
          data = response.data.results;
        } else if (type === fetchType.MOVIE) {
          data = response.data;
        } else if (type === fetchType.SEARCH) {
          data = response.data.results;
        } else {
          data = response.data;
        }

        let dataToAdd = {
          data: data,
          type: type,
        };
        console.log('key :', key);
        cache.setCacheData((prevState) => ({
          ...prevState,
          [key]: dataToAdd,
        }));
        callback(data, key);
      })
      .catch((error) => console.log(error));
  }
};

const getJokes = (callback) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };

  axios
    .get(jokesUrl, config)
    .then((response) => {
      const data = response.data[0];
      callback(data.content);
    })
    .catch((error) => console.log(error));
};

// export default getMovies

module.exports = {
  getMovies,
  getJokes,
};
