import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import CardManager from './CardManager';
import PlayerContainer from './PlayerContainer';
import ContentDisplay from './ContentDisplay';
import Modal from './Modal';

const MainContainer = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const { cacheData } = props.getters.cache;
  const {
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
  } = props.getters.grid;
  const {
    currentMovieBasics,
    currentMovieKey,
    currentMovieData,
    status,
    showModal,
    isLoading,
    isPlaying,
  } = props.getters.movie;
  const { callQueue, occupied } = props.getters.queue;
  const { myRef } = props.getters.scroll;

  const { setCacheData } = props.setters.cache;
  const {
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
  } = props.setters.grid;
  const {
    setCurrentMovieBasics,
    setCurrentMovieKey,
    setCurrentMovieData,
    setStatus,
    setRequestStatus,
    setShowModal,
    setIsLoading,
    setIsPlaying,
    onCloseModal,
  } = props.setters.movie;
  const { setCallQueue, setOccupied } = props.setters.queue;

  const cache = { cacheData, setCacheData };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const display = isPlaying ? (
    <PlayerContainer
      cache={cache}
      currentMovieData={currentMovieData}
      currentMovieKey={currentMovieKey}
      setIsPlaying={setIsPlaying}
    />
  ) : (
    <React.Fragment>
      <CardManager
        hasMore={hasMore}
        isFetching={isFetching}
        moviesData={moviesData}
        setCurrentMovieBasics={setCurrentMovieBasics}
        setShowModal={setShowModal}
        itemsToAdd={itemsToAdd}
        callQueue={callQueue}
        setCallQueue={setCallQueue}
      />
      {showModal ? (
        <Modal onClose={onCloseModal} show={showModal}>
          <ContentDisplay
            status={status}
            isLoading={isLoading}
            currentMovieData={currentMovieData}
            setStatus={setStatus}
            setRequestStatus={setRequestStatus}
            setIsPlaying={setIsPlaying}
          />
        </Modal>
      ) : null}
    </React.Fragment>
  );
  return (
    <div ref={myRef} className={isPlaying ? 'main-container-reduced' : 'main-container'}>
      {display}
    </div>
  );
};

export default MainContainer;
