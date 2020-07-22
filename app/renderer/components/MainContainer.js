import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import CardManager from './CardManager';
import PlayerContainer from './PlayerContainer';
import ContentDisplay from './ContentDisplay';
import Modal from './Modal';
import SelectionBar from './SelectionBar';
import LogoContainer from './LogoContainer';
import DownLoadManager from './DownLoadManager';

const MainContainer = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const { cacheData } = props.getters.cache;
  const { mode } = props.getters.mode;
  const {
    moviesData,
    gridInfos,
    page,
    hasMore,
    numberPerLine,
    itemsToAdd,
    isFetching,
    scroll,
    getMoviesGrid,
  } = props.getters.grid;
  const {
    currentMovieId,
    currentMovieKey,
    currentMovieData,
    status,
    showModal,
    isLoading,
    isPlaying,
    moreInfos,
    urlList,
  } = props.getters.movie;
  const { callQueue, solvedQueue, occupied } = props.getters.queue;
  const { myRef } = props.getters.scroll;
  const { snackQueue } = props.getters.snack;

  const { setCacheData } = props.setters.cache;
  const { setMode } = props.setters.mode;
  const {
    setMoviesData,
    setGridInfos,
    setPage,
    setHasMore,
    configureGrid,
    setNumberPerline,
    setItemsToAdd,
    setIsFetching,
    setScroll,
  } = props.setters.grid;
  const {
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
  } = props.setters.movie;
  const { setSnackQueue } = props.setters.snack;

  const { setCallQueue, setSolvedQueue, setOccupied } = props.setters.queue;

  const snack = { snackQueue, setSnackQueue };
  const cache = { cacheData, setCacheData };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  let bar = null;
  let container = null;

  if (mode == 'stream') {
    bar = null;
    container = (
      <PlayerContainer
        cache={cache}
        currentMovieData={currentMovieData}
        currentMovieKey={currentMovieKey}
        setIsPlaying={setIsPlaying}
        urlList={urlList}
        setUrlList={setUrlList}
      />
    );
  } else if (mode == 'search') {
    bar = (
      <SelectionBar
        gridInfos={gridInfos}
        configureGrid={configureGrid}
        getters={props.getters}
        setters={props.setters}
        cache={props.cache}
      />
    );

    container = (
      <React.Fragment>
        <CardManager
          hasMore={hasMore}
          isFetching={isFetching}
          moviesData={moviesData}
          setCurrentMovieId={setCurrentMovieId}
          setShowModal={setShowModal}
          gridInfos={gridInfos}
        />
        {showModal ? (
          <Modal onClose={onCloseModal} show={showModal}>
            <ContentDisplay
              status={status}
              isLoading={isLoading}
              currentMovieData={currentMovieData}
              setStatus={setStatus}
              setRequestStatus={setRequestStatus}
              setMode={setMode}
            />
          </Modal>
        ) : null}
      </React.Fragment>
    );
  } else if (mode == 'load') {
    bar = null;
    container = (
      <DownLoadManager
        callQueue={callQueue}
        setCallQueue={setCallQueue}
        solvedQueue={solvedQueue}
        setSolvedQueue={setSolvedQueue}
        cache={cache}
      />
    );
  } else {
    bar = null;
    container = null;
  }

  return (
    <div className="main-content-container">
      {bar}
      <div
        ref={myRef}
        className={
          mode === 'stream'
            ? 'main-container-reduced'
            : mode === 'search'
            ? 'main-container'
            : 'main-container-2'
        }>
        {container}
      </div>
    </div>
  );
};

export default MainContainer;
