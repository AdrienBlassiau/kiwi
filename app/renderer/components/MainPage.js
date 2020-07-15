import React, { useState, useEffect } from 'react';
import MainContainer from './MainContainer';
import MainTopBar from './MainTopBar';
import BottomBar from './BottomBar';
import SearchBar from './SearchBar';
import StreamBar from './StreamBar';
import Style from '../css/AppCss.js';

import newDriver from '../scrapper/driver.js';
import { getMovies } from '../controllers';

// import Style from '../css/App.css';
// import '../css/Icon.css';

const MainPage = () => {
  // [Cache] : cache system, it's a dict with request as key and duration,
  // type and adress as content
  const [cacheData, setCacheData] = useState([]);

  console.log('DRIVER SET !!');
  // [Driver] : selenium driver, for scrapping with click, ...
  const [driver, setDriver] = useState(newDriver);

  // [Search] : searchBar states
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('Search for a movie or a tv show ...');
  const [result, setResult] = useState(null);

  // [grid] : movie data we can see on main site grid, fetch state information
  const [moviesData, setMoviesData] = useState([]);
  const [gridType, setGridType] = useState('popular');
  const [gridInfos, setGridInfos] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [numberPerLine, setNumberPerline] = useState(1);
  const [itemsToAdd, setItemsToAdd] = useState(1);

  // [Movie] : movie data before streaming
  const [currentMovieData, setCurrentMovieData] = useState(null);
  const [currentMovieUrl, setCurrentMovieUrl] = useState('');
  const [currentMovieId, setCurrentMovieId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const configureGrid = (type, info) => {
    console.log('On configure la grid');
    setMoviesData([]);
    setGridType(type);
    setGridInfos(info);
    setPage(1);
    setHasMore(true);
  };

  const getters = {
    cache: {
      cacheData,
    },
    driver: {
      driver,
    },
    search: {
      active,
      value,
      label,
      result,
    },
    grid: {
      moviesData,
      gridType,
      gridInfos,
      page,
      hasMore,
      numberPerLine,
      itemsToAdd,
    },
    movie: {
      currentMovieId,
      currentMovieUrl,
      currentMovieData,
      showModal,
      isPlaying,
    },
  };

  const setters = {
    cache: {
      setCacheData,
    },
    driver: {
      setDriver,
    },
    search: {
      setActive,
      setValue,
      setLabel,
      setResult,
    },
    grid: {
      setMoviesData,
      setGridType,
      setGridInfos,
      setPage,
      setHasMore,
      configureGrid,
      setNumberPerline,
      setItemsToAdd,
    },
    movie: {
      setCurrentMovieId,
      setCurrentMovieUrl,
      setCurrentMovieData,
      setShowModal,
      setIsPlaying,
    },
  };

  const cache = { cacheData, setCacheData };

  const updateNumberPerLine = () => {
    console.log('INNER');
    console.log(window.innerWidth);
    const number = Math.floor((window.innerWidth - 20) / 170);
    const lastLineItems = moviesData.length % number;
    console.log('length:', moviesData.length);
    console.log('numberperline:', number);
    console.log('to add', number - lastLineItems);
    setItemsToAdd(lastLineItems === 0 ? 0 : number - lastLineItems);
  };

  useEffect(() => {
    updateNumberPerLine();
  }, [moviesData]);

  useEffect(() => {
    console.log('On change le contenu de la page principale');
    // setters.driver.setDriver();

    const callback1 = (data1, url1) => {
      setHasMore(data1.length - 1 > 0);
      const callback2 = (data2, url2) => {
        setMoviesData(moviesData.concat(data1).concat(data2));
        setHasMore(data2.length - 1 > 0);
      };

      getMovies([2, gridInfos], callback2, gridType, cache);
    };

    getMovies([1, gridInfos], callback1, gridType, cache);

    setPage(3);
  }, [gridInfos]);

  console.log('currentMovieData: ', currentMovieData);
  return (
    <div>
      <Style />
      <div className="master-component">
        <MainTopBar getters={getters} setters={setters} />
        {isPlaying ? (
          <StreamBar getters={getters} setters={setters} cache={cache} />
        ) : (
          <SearchBar getters={getters} setters={setters} cache={cache} />
        )}
        <MainContainer getters={getters} setters={setters} />
        <BottomBar getters={getters} setters={setters} cache={cache} />
      </div>
    </div>
  );
};

export default MainPage;
