import React, { useState, useEffect } from 'react';

import CardManager from './CardManager';
import PlayerContainer from './PlayerContainer';
import ContentDisplay from './ContentDisplay';
import Modal from './Modal';

import { getMovies } from '../controllers/';
import { setSource } from '../utils';

const MainPage = (props) => {
  const { driver } = props.getters.driver;
  const { moviesData } = props.getters.general;
  const { page, hasMore } = props.getters.popular;
  const { currentMovie, showModal } = props.getters.movie;
  const { isPlaying, url } = props.getters.stream;

  const { setMoviesData } = props.setters.general;
  const { setPage, setHasMore } = props.setters.popular;
  const { setCurrentMovie, setShowModal } = props.setters.movie;
  const { setIsPlaying, setUrl } = props.setters.stream;

  const getPopularMovies = () => {
    const callback = (data) => {
      console.log(data);
      setMoviesData(moviesData.concat(setSource(data, 'popular')));
      setHasMore(data.length - 1 > 0);
    };

    getMovies(page, callback, 'popular');
    setPage(page + 1);
  };

  const display = isPlaying ? (
    <PlayerContainer url={url} driver={driver} setIsPlaying={setIsPlaying} />
  ) : (
  <React.Fragment>
    <CardManager
      myRef={props.myRef}
      getMovies={getPopularMovies}
      hasMore={hasMore}
      moviesData={moviesData}
      driver={driver}
      setIsPlaying={setIsPlaying}
      setUrl={setUrl}
      setCurrentMovie={setCurrentMovie}
      setShowModal={setShowModal}
    />
    { showModal ?
    <Modal onClose={() => setShowModal(false)} show={showModal}>
      <ContentDisplay
        movieId={currentMovie}
        driver={driver}
        setIsPlaying={setIsPlaying}
        setUrl={setUrl}
      />
    </Modal> : null}
  </React.Fragment>
  )
  return display;
};

export default MainPage;
