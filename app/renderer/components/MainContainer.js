import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import ReactDOM from 'react-dom';

import PlayerContainer from './PlayerContainer';
import SelectionBar from './SelectionBar';
import CardManager from './CardManager';
import Modal from './Modal';
import ContentDisplay from './ContentDisplay';
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
    <MainContainerMaster>
      {bar}
      <MainContainerStyle mode={mode} ref={myRef}>
        {container}
      </MainContainerStyle>
    </MainContainerMaster>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const MainContainerMaster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const MainContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0px;
  right: 0px;
  left: 0px;
  margin-bottom: 30px;
  position: absolute;

  top: ${({ mode }) => (mode === 'search' && '450px') || (mode === 'stream' && '100px') || '350px'};
  overflow: ${({ mode }) =>
    (mode === 'search' && 'auto') || (mode === 'stream' && 'auto') || 'auto'};
`;

const MainContainerMidReducedStyle = styled.div`
  display: flex;
  justify-content: center;
  top: 350px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  position: absolute;
  overflow: scroll;
  padding-bottom: 30px;
`;

const MainContainerReducedStyle = styled.div`
  top: 100px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  position: absolute;
  overflow: auto;
`;

export default MainContainer;
