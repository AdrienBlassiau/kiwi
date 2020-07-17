import React, { useState, useEffect, useRef } from 'react';

const handler = (moviesData, getMoviesGrid, gridInfos, page) => {
  useEffect(() => {
    if (page == 2) {
      getMoviesGrid();
    }
  }, [moviesData]);

  useEffect(() => {
    getMoviesGrid();
  }, [gridInfos]);
};

module.exports = {
  handler,
};
