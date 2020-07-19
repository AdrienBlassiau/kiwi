import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import CardManager from './CardManager';
import PlayerContainer from './PlayerContainer';
import ContentDisplay from './ContentDisplay';
import Modal from './Modal';
import SelectionBar from './SelectionBar';
import LogoContainer from './LogoContainer';

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
  const {
    setSnackQueue
  } = props.setters.snack;

  const { setCallQueue, setOccupied } = props.setters.queue;

  const snack = { snackQueue, setSnackQueue };
  const cache = { cacheData, setCacheData };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  let bar = null
  let container = null

  if (mode=='stream'){
    bar = null
    container = <PlayerContainer
      cache={cache}
      currentMovieData={currentMovieData}
      currentMovieKey={currentMovieKey}
      setIsPlaying={setIsPlaying}
    />
  }
  else if (mode=='search'){
    bar = <React.Fragment>
            <LogoContainer />
            <SelectionBar gridInfos={gridInfos} configureGrid={configureGrid} getters={props.getters} setters={props.setters} cache={props.cache}/>
          </React.Fragment>

    container = <React.Fragment>
      <CardManager
        hasMore={hasMore}
        isFetching={isFetching}
        moviesData={moviesData}
        setCurrentMovieBasics={setCurrentMovieBasics}
        setShowModal={setShowModal}
        itemsToAdd={itemsToAdd}
        callQueue={callQueue}
        setCallQueue={setCallQueue}
        configureGrid={configureGrid}
        gridInfos={gridInfos}
        snack={snack}
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
  }
  else{
    bar = null
    container = null
  }

  return (
    <div className="main-container-wrapper">
      {bar}
      <div ref={myRef} className={mode=='stream' ? 'main-container-reduced' : 'main-container'}>
        {container}
      </div>
    </div>
  );
};

export default MainContainer;
