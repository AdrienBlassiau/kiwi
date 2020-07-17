import React, { useState, useEffect } from 'react';

import newDriver from '../scrapper/driver.js';
import { getMovies } from '../controllers';

import MainContainer from './MainContainer';
import MainTopBar from './MainTopBar';
import BottomBar from './BottomBar';
import SearchBar from './SearchBar';
import StreamBar from './StreamBar';

import Style from '../css/AppCss.js';
import * as utils from '../utils';

import * as handleNumberPerLine from '../events/handleNumberPerLine';
import * as handleFirstLoad from '../events/handleFirstLoad';
import * as handleStreamSearch from '../events/handleStreamSearch';

const MainPage = () => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  // [Cache] : cache system, it's a dict with request as key and duration,
  // type and adress as content
  const [cacheData, setCacheData] = useState([]);

  // [Driver] : selenium driver, for scrapping with click, ...
  const [driver, setDriver] = useState(newDriver);

  // [Search] : searchBar states
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('Search for a movie or a tv show ...');

  // [grid] : movie data we can see on main site grid, fetch state information
  const [moviesData, setMoviesData] = useState([]);
  const [gridType, setGridType] = useState('popular');
  const [gridInfos, setGridInfos] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [numberPerLine, setNumberPerline] = useState(1);
  const [itemsToAdd, setItemsToAdd] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [scroll, setScroll] = useState(null);

  // [Movie] : movie data before streaming
  const [currentMovieData, setCurrentMovieData] = useState(null);
  const [currentMovieKey, setCurrentMovieKey] = useState('');
  const [currentMovieBasics, setCurrentMovieBasics] = useState(null);
  const [status, setStatus] = useState(utils.statusType.PENDING);
  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // [Call Queue] : the call stack
  const [callQueue, setCallQueue] = useState([]);
  const [occupied, setOccupied] = useState(null);

  const configureGrid = (type, info) => {
    setMoviesData([]);
    setGridType(type);
    setGridInfos(info);
    setPage(1);
    setHasMore(true);
  };

  const getMoviesGrid = () => {
    const callback = (data, key) => {
      console.log('data: ');
      console.log(data);
      setMoviesData(moviesData.concat(data));
      console.log('LENGTH:', data.length);
      setHasMore(data.length - 1 > 0);
    };

    getMovies([page, gridInfos], callback, gridType, cache);
    setPage(page + 1);
  };

  const onCloseModal = () => {
    setCurrentMovieData(null);
    setCurrentMovieKey('');
    setCurrentMovieBasics(null);
    setStatus(utils.statusType.PENDING);
    setShowModal(false);
  };

  const setRequestStatus = (data) => {
    if (data.length === 0) {
      setStatus(statusType.NOT_FOUND);
    } else {
      setStatus(statusType.FOUND);
    }
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
    },
    grid: {
      moviesData,
      gridType,
      gridInfos,
      page,
      hasMore,
      numberPerLine,
      itemsToAdd,
      isFetching,
      scroll,
      getMoviesGrid,
    },
    movie: {
      currentMovieBasics,
      currentMovieKey,
      currentMovieData,
      status,
      showModal,
      isPlaying,
    },
    queue: {
      callQueue,
      occupied
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
      setIsFetching,
      setScroll,
    },
    movie: {
      setCurrentMovieBasics,
      setCurrentMovieKey,
      setCurrentMovieData,
      setStatus,
      setRequestStatus,
      setShowModal,
      setIsPlaying,
      onCloseModal,
    },
    queue: {
      setCallQueue,
      setOccupied
    },
  };

  const cache = { cacheData, setCacheData };
  const queue = { callQueue, occupied, setCallQueue, setOccupied };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////  HANDLING EVENTS  /////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  // [FILL LINE]: Compute the number of card remaining to fill the empty space
  handleNumberPerLine.handler(moviesData, setItemsToAdd);

  // [FIRST LOADING EVENT]: 2 useEffect to load 2*20 data on first page.
  handleFirstLoad.handler(moviesData, getMoviesGrid, gridInfos, page);

  // [STREAM SEARCH]: Stream search event
  handleStreamSearch.handler(cache, currentMovieBasics, queue);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

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
