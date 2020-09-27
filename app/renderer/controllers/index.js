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
  const type = data.type;
  const page = data.page;

  console.log(type);
  return (
    ' https://api.themoviedb.org/3/' +
    type +
    '/popular?api_key=' +
    API_KEY +
    '&language=' +
    LANGUAGE +
    '&page=' +
    page
  );
};

const movieUrl = (data) => {
  const type = data.type;
  const movieId = data.movieId;

  return (
    ' https://api.themoviedb.org/3/' +
    type +
    '/' +
    movieId +
    '?api_key=' +
    API_KEY +
    '&append_to_response=release_dates,credits,images,translations'
  );
};

const searchUrl = (data) => {
  const query = data.query;
  const type = data.type;
  const page = data.page;

  return (
    ' https://api.themoviedb.org/3/search/' +
    type +
    '?api_key=' +
    API_KEY +
    '&query=' +
    query +
    '&language=' +
    LANGUAGE +
    '&page=' +
    page +
    '&include_adult=' +
    ADULT
  );
};

const jokesUrl = 'https://api-light.com/api/get/random';

const getMovies = (data, callback, cache) => {
  let url = '';
  let key = '';
  let style = data.Style;
  // console.log('On entre dans get movies');
  if (style === fetchType.POPULAR) {
    url = popularUrl(data);
    key = url;
  } else if (style === fetchType.MOVIE) {
    url = movieUrl(data);
    key = url;
  } else if (style === fetchType.SEARCH) {
    url = searchUrl(data);
    key = url;
  } else {
    url = movieUrl(data);
    key = url;
  }

  // console.log(key);

  if (cache.cacheData[key] != undefined) {
    // console.log('Dans le chache !');
    let dataToRetrieve = cache.cacheData[key].data;
    callback(dataToRetrieve, key);
  } else {
    // console.log('Pas dans le chache ! : ', key);
    axios
      .get(url)
      .then((response) => {
        let data = null;
        if (style === fetchType.POPULAR) {
          data = response.data.results;
        } else if (style === fetchType.MOVIE) {
          data = response.data;
        } else if (style === fetchType.SEARCH) {
          data = response.data.results;
        } else {
          data = response.data;
        }

        let dataToAdd = {
          data: data,
          style: style,
        };
        // console.log('key :', key);
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
  movieUrl,
};
