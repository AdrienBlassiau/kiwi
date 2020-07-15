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

  console.log('On entre dans get movies');
  if (type === fetchType.POPULAR) {
    url = popularUrl(data);
  } else if (type === fetchType.MOVIE) {
    url = movieUrl(data);
  } else if (type === fetchType.SEARCH) {
    url = searchUrl(data);
  } else {
    url = movieUrl(data);
  }

  console.log(url);

  if (cache.cacheData[url] != undefined) {
    console.log('Dans le chache !');
    let dataToRetrieve = cache.cacheData[url].data;
    callback(dataToRetrieve, url);
  } else {
    console.log('Pas dans le chache ! : ', url);
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
        console.log('URL :', url);
        cache.setCacheData((prevState) => ({
          ...prevState,
          [url]: dataToAdd,
        }));
        callback(data, url);
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
