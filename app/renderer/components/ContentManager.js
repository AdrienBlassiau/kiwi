import React, { useState, useEffect } from 'react';

import CardManager from './CardManager';
import PlayerContainer from './PlayerContainer';
import {getMovies} from '../controllers/'
import {setSource} from '../utils'

const MainPage = (props) => {
  const { moviesData } = props.getters.general;
  const { page, hasMore } = props.getters.popular;
  const { isPlaying, url } = props.getters.stream;
  const { driver } = props.getters.driver;
  const { setMoviesData } = props.setters.general;
  const { setPage, setHasMore } = props.setters.popular;
  const { setIsPlaying, setUrl } = props.setters.stream;

  const getPopularMovies = () => {
    const callback = (data) => {
      console.log(data)
      setMoviesData(moviesData.concat(setSource(data,"popular")))
      setHasMore(data.length - 1 > 0);
    };

    getMovies(page, callback, 'popular');
    setPage(page+1);
  }

  const display = isPlaying ? (
    <PlayerContainer url={url} driver={driver} setIsPlaying={setIsPlaying} />
  ) : (
    <CardManager
      myRef={props.myRef}
      getMovies={getPopularMovies}
      hasMore={hasMore}
      moviesData={moviesData}
      driver={driver}
      setIsPlaying={setIsPlaying}
      setUrl={setUrl}
    />
  );

  return display;
};

export default MainPage;
