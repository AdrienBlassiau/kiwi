import React, { useState, useEffect, useRef } from 'react';
import { getMovies } from '../controllers';

const handler = (
  currentMovieData,
  setCurrentMovieData,
  setCurrentMovieKey,
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
    getMovies(currentMovieBasics.id, callback, 'movie', cache);
  };

  useEffect(() => {
    if (showModal) {
      console.log('handleCurrent');
      handleCurrentMovie(currentMovieBasics);
    }
  }, [showModal]);
};

module.exports = {
  handler,
};
