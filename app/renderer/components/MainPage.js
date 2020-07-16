import React, { useState, useEffect } from 'react';

import newDriver from '../scrapper/driver.js';
import { getMovies } from '../controllers';

import MainContainer from './MainContainer';
import MainTopBar from './MainTopBar';
import BottomBar from './BottomBar';
import SearchBar from './SearchBar';
import StreamBar from './StreamBar';

import Style from '../css/AppCss.js';


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
  const [currentMovieUrl, setCurrentMovieUrl] = useState('');
  const [currentMovieId, setCurrentMovieId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const configureGrid = (type, info) => {
    setMoviesData([]);
    setGridType(type);
    setGridInfos(info);
    setPage(1);
    setHasMore(true);
  };

  const getMoviesGrid = () => {
    const callback = (data, url) => {
      console.log("data: ")
      console.log(data);
      setMoviesData(moviesData.concat(data));
      console.log("LENGTH:",data.length)
      setHasMore(data.length - 1 > 0);
    };

    getMovies([page, gridInfos], callback, gridType, cache);
    setPage(page + 1);
  };

  const onCloseModal = () => {
    setCurrentMovieId(null);
    setCurrentMovieUrl('');
    setCurrentMovieData(null);
    setShowModal(false);
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
      label
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
      getMoviesGrid
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
      setLabel
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
      setScroll
    },
    movie: {
      setCurrentMovieId,
      setCurrentMovieUrl,
      setCurrentMovieData,
      setShowModal,
      setIsPlaying,
      onCloseModal
    },
  };

  const cache = { cacheData, setCacheData };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////  HANDLING EVENTS  /////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const handleNumberPerLine = () => {
    // console.log('INNER');
    // console.log(window.innerWidth);
    const number = Math.floor((window.innerWidth - 20) / 170);
    const lastLineItems = moviesData.length % number;
    // console.log('length:', moviesData.length);
    // console.log('numberperline:', number);
    // console.log('to add', number - lastLineItems);
    setItemsToAdd(lastLineItems === 0 ? 0 : number - lastLineItems);
  };

  useEffect(() => {
    handleNumberPerLine();
  }, [moviesData]);

  useEffect(() => {
    if (page==2){
      getMoviesGrid()
    }
  }, [moviesData]);

  useEffect(() => {
    getMoviesGrid()

  }, [gridInfos]);

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
