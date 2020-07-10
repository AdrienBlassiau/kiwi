import React, { useState, useEffect } from 'react';
import MainContainer from './MainContainer';
import MainTopBar from './MainTopBar';
import SearchBar from './SearchBar';
import Style from '../css/AppCss.js';

import newDriver from '../scrapper/driver.js';
import { getMovies } from '../controllers';
import { setSource } from '../utils';

// import Style from '../css/App.css';
// import '../css/Icon.css';

const MainPage = () => {
  // [Driver] : selenium driver, for scrapping with click, ...
  const [driver, setDriver] = useState(null);

  // [Search] : searchBar states
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('Search for a movie or a tv show ...');
  const [result, setResult] = useState(null);

  // [General] : general movie data, use to avoid multi fetching ...
  const [moviesData, setMoviesData] = useState([]);

  // [Popular] : popular movie data, fetch state information
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // [Movie] : movie data before streaming
  const [currentMovie, setCurrentMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // [Stream] : Stream data
  const [isPlaying, setIsPlaying] = useState(false);
  const [url, setUrl] = useState('');

  const getters = {
    driver: {
      driver,
    },
    search: {
      active,
      value,
      label,
      result,
    },
    general: {
      moviesData,
    },
    popular: {
      page,
      hasMore,
    },
    movie: {
      currentMovie,
      showModal,
    },
    stream: {
      isPlaying,
      url,
    },
  };

  const setters = {
    driver: {
      setDriver,
    },
    search: {
      setActive,
      setValue,
      setLabel,
      setResult,
    },
    general: {
      setMoviesData,
    },
    popular: {
      setPage,
      setHasMore,
    },
    movie: {
      setCurrentMovie,
      setShowModal,
    },
    stream: {
      setIsPlaying,
      setUrl,
    },
  };

  useEffect(() => {
    setters.driver.setDriver(newDriver);

    const callback1 = (data1) => {
      setHasMore(data1.length - 1 > 0);
      // setMoviesData(moviesData.concat(data1))
      const callback2 = (data2) => {
        setMoviesData(
          moviesData.concat(setSource(data1, 'popular').concat(setSource(data2, 'popular'))),
        );
        setHasMore(data2.length - 1 > 0);
      };

      getMovies(2, callback2, 'popular');
    };

    getMovies(1, callback1, 'popular');

    setPage(3);
  }, []);

  return (
    <div>
      <Style />
      <div className="master-component">
        <MainTopBar getters={getters} setters={setters} />
        <SearchBar getters={getters} setters={setters} />
        <MainContainer getters={getters} setters={setters} />
      </div>
    </div>
  );
};

export default MainPage;
