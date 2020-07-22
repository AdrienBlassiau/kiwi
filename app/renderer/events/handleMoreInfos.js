import React, { useState, useEffect, useRef } from 'react';
import { getMovies } from '../controllers';
import logger from '../utils/logger.js';

const handler = (
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
) => {
  useEffect(() => {
    if (currentMovieData) {
      setIsLoading(false);
    }
  }, [currentMovieData]);

  const handleCurrentMovie = (currentMovieId) => {
    const callback = (data, key) => {
      setCurrentMovieData(data);

      setCallQueue((prevState) => prevState.concat(data));
      logger.debug('(fire from handleMoreInfos) handleStreamSearch');

      setSnackQueue((prevState) =>
        prevState.concat([{ text: data.title + ' added to the loading queue' }]),
      );

      setCurrentMovieKey(key);
      setIsLoading(false);
    };
    getMovies({ ...gridInfos, movieId: currentMovieId, style: 'movie' }, callback, cache);
  };

  useEffect(() => {
    if (currentMovieId) {
      logger.debug('(handleMoreInfos) currentMovieId has changed: ');
      logger.debug(JSON.stringify(currentMovieId));
      handleCurrentMovie(currentMovieId);
    }
  }, [currentMovieId]);
};

module.exports = {
  handler,
};
