import React, { useState, useEffect } from 'react';

import CardManager from './CardManager';
import PlayerContainer from './PlayerContainer';
import ContentDisplay from './ContentDisplay';
import Modal from './Modal';

import { getMovies } from '../controllers/';

const MainPage = (props) => {
  const { cacheData } = props.getters.cache;
  const { driver } = props.getters.driver;
  const {
    moviesData,
    gridType,
    gridInfos,
    page,
    hasMore,
    numberPerLine,
    itemsToAdd,
  } = props.getters.grid;
  const {
    currentMovieId,
    currentMovieUrl,
    currentMovieData,
    showModal,
    isPlaying,
  } = props.getters.movie;

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
  } = props.setters.grid;
  const {
    setCurrentMovieId,
    setCurrentMovieUrl,
    setCurrentMovieData,
    setShowModal,
    setIsPlaying,
  } = props.setters.movie;

  const cache = { cacheData, setCacheData };

  const getMoviesGrid = () => {
    const callback = (data, url) => {
      // console.log("VOICI CE QUE L'on met")
      // console.log(data);
      setMoviesData(moviesData.concat(data));
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

  const display = isPlaying ? (
    <PlayerContainer
      currentMovieUrl={currentMovieUrl}
      currentMovieData={currentMovieData}
      driver={driver}
      cache={cache}
      setIsPlaying={setIsPlaying}
    />
  ) : (
    <React.Fragment>
      <CardManager
        myRef={props.myRef}
        getMovies={getMoviesGrid}
        hasMore={hasMore}
        moviesData={moviesData}
        driver={driver}
        setIsPlaying={setIsPlaying}
        setCurrentMovieId={setCurrentMovieId}
        setShowModal={setShowModal}
        cache={cache}
        gridInfos={gridInfos}
        itemsToAdd={itemsToAdd}
      />
      {showModal ? (
        <Modal onClose={onCloseModal} show={showModal}>
          <ContentDisplay
            currentMovieId={currentMovieId}
            currentMovieUrl={currentMovieUrl}
            currentMovieData={currentMovieData}
            setCurrentMovieData={setCurrentMovieData}
            setCurrentMovieUrl={setCurrentMovieUrl}
            driver={driver}
            setIsPlaying={setIsPlaying}
            cache={cache}
          />
        </Modal>
      ) : null}
    </React.Fragment>
  );
  return display;
};

export default MainPage;
