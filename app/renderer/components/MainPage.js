import React, { useState, useEffect, useRef } from 'react';

import { getMovies } from '../controllers';

import SnackBarManager from './SnackBarManager';
import MainContainer from './MainContainer';
import MainTopBar from './MainTopBar';
import BottomBar from './BottomBar';
import StreamBar from './StreamBar';
import SwitchContent from './SwitchContent';
import DecoBar from './DecoBar';

import Style from '../css/AppCss.js';
import * as utils from '../utils';

import * as handleNumberPerLine from '../events/handleNumberPerLine';
import * as handleFirstLoad from '../events/handleFirstLoad';
import * as handleStreamSearch from '../events/handleStreamSearch';
import * as handleScrollLoad from '../events/handleScrollLoad';
import * as handleMoreInfos from '../events/handleMoreInfos';
import * as handleOpenModal from '../events/handleOpenModal';
import * as handleCloseModal from '../events/handleCloseModal';

const MainPage = () => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  // [Cache] : cache system, it's a dict with request as key and duration,
  // type and adress as content
  const [cacheData, setCacheData] = useState([]);

  // [mode] : tab bar openened mode
  const [mode, setMode] = useState('search');

  // [Search] : searchBar states
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('Search for a movie or a tv show ...');

  // [grid] : movie data we can see on main site grid, fetch state information
  const [moviesData, setMoviesData] = useState([]);
  const [gridInfos, setGridInfos] = useState({ type: 'movie', style: 'popular', query: '' });
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [numberPerLine, setNumberPerline] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [scroll, setScroll] = useState(null);

  // [Movies and Tv Shows] : movie and TV shows data before streaming
  const [currentMovieData, setCurrentMovieData] = useState(null);
  const [currentMovieKey, setCurrentMovieKey] = useState('');
  const [currentMovieId, setCurrentMovieId] = useState(null);
  const [status, setStatus] = useState(utils.statusType.PENDING);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [moreInfos, setMoreInfos] = useState(false);
  const [urlList, setUrlList] = useState([]);

  // [Call Queue] : the call stack
  const [callQueue, setCallQueue] = useState([]);
  const [solvedQueue, setSolvedQueue] = useState([]);
  const [occupied, setOccupied] = useState(null);

  // [SnackBar] : the snackbar manager
  const [snackQueue, setSnackQueue] = useState([]);

  // [scroll ref] : reference for scrolling
  const myRef = useRef(null);

  const configureGrid = (infos) => {
    console.log('Entrée dans configureGrid:', infos);
    console.log('Previous data:', moviesData);
    setMoviesData([]);
    setGridInfos(infos);
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

    getMovies({ page: page, ...gridInfos }, callback, cache);
    setPage(page + 1);
  };

  const onCloseModal = () => {
    setCurrentMovieData(null);
    setCurrentMovieKey('');
    setCurrentMovieId(null);
    setStatus(utils.statusType.PENDING);
    setShowModal(false);
    setIsLoading(true);
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
    mode: {
      mode,
    },
    search: {
      active,
      value,
      label,
    },
    grid: {
      moviesData,
      gridInfos,
      page,
      hasMore,
      numberPerLine,
      isFetching,
      scroll,
      getMoviesGrid,
    },
    movie: {
      currentMovieId,
      currentMovieKey,
      currentMovieData,
      status,
      showModal,
      isLoading,
      isPlaying,
      moreInfos,
      urlList,
    },
    queue: {
      callQueue,
      solvedQueue,
      occupied,
    },
    scroll: {
      myRef,
    },
    snack: {
      snackQueue,
    },
  };

  const setters = {
    cache: {
      setCacheData,
    },
    mode: {
      setMode,
    },
    search: {
      setActive,
      setValue,
      setLabel,
    },
    grid: {
      setMoviesData,
      setGridInfos,
      setPage,
      setHasMore,
      configureGrid,
      setNumberPerline,
      setIsFetching,
      setScroll,
    },
    movie: {
      setCurrentMovieId,
      setCurrentMovieKey,
      setCurrentMovieData,
      setStatus,
      setRequestStatus,
      setShowModal,
      setIsLoading,
      setIsPlaying,
      onCloseModal,
      setMoreInfos,
      setUrlList,
    },
    queue: {
      setCallQueue,
      setSolvedQueue,
      setOccupied,
    },
    snack: {
      setSnackQueue,
    },
  };

  const cache = { cacheData, setCacheData };
  const queue = { callQueue, solvedQueue, occupied, setCallQueue, setSolvedQueue, setOccupied };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////  HANDLING EVENTS  /////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  // [FILL LINE]: Compute the number of card remaining to fill the empty space
  // handleNumberPerLine.handler(moviesData, setItemsToAdd);

  // [FIRST LOADING EVENT]: load enough data to fill the page.
  handleFirstLoad.handler(moviesData, getMoviesGrid, gridInfos, page);

  // [SCROLL MORE LOADING EVENT]: Load as data as we can per 20,
  // every time we scroll
  handleScrollLoad.handler(
    myRef,
    scroll,
    setScroll,
    isFetching,
    setIsFetching,
    hasMore,
    getMoviesGrid,
    moviesData,
  );

  // [STREAM SEARCH]: Stream search event
  handleStreamSearch.handler(cache, currentMovieId, queue, gridInfos);

  // [MODAL CONTENT]: Get modal content data
  handleMoreInfos.handler(
    setCallQueue,
    setSnackQueue,
    currentMovieData,
    setCurrentMovieData,
    setCurrentMovieKey,
    gridInfos,
    setIsLoading,
    currentMovieId,
    moreInfos,
    cache,
  );

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <Style />
      <div className="master-component">
        <SnackBarManager snackQueue={snackQueue} setSnackQueue={setSnackQueue} />
        <MainTopBar />
        {mode === 'stream' ? (
          <StreamBar setMode={setMode} currentMovieData={currentMovieData} />
        ) : (
          <DecoBar />
        )}
        {mode === 'stream' ? null : <SwitchContent setMode={setMode} />}
        <MainContainer getters={getters} setters={setters} />
        <BottomBar />
      </div>
    </div>
  );
};

export default MainPage;
