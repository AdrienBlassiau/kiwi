import React, { useState, useEffect, useRef } from 'react';
import { getMovies } from '../controllers';

const handler = (
  currentMovieData,
  setCurrentMovieData,
  setCurrentMovieKey,
  gridInfos,
  setIsLoading,
  currentMovieBasics,
  showModal,
  cache,
) => {
  useEffect(() => {
    if (currentMovieData) {
      setIsLoading(false);
    }
  }, [currentMovieData]);

  const handleCurrentMovie = (currentMovieBasics) => {
    const callback = (data, key) => {
      setCurrentMovieData(data);
      setCurrentMovieKey(key);
      setIsLoading(false);
    };
    getMovies({ ...gridInfos, movieId: currentMovieBasics.id, style: 'movie' }, callback, cache);
  };

  useEffect(() => {
    if (showModal) {
      console.log('OPEN MODAL');
    }
  }, [showModal]);
};

module.exports = {
  handler,
};
