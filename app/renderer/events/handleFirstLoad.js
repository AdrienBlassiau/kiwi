import React, { useState, useEffect, useRef } from 'react';

const handler = (moviesData, getMoviesGrid, gridInfos, page) => {

  // useEffect(() => {
  //   if (page == 8) {
  //     getMoviesGrid();
  //   }
  // }, [moviesData]);

  // useEffect(() => {
  //   if (page == 7) {
  //     getMoviesGrid();
  //   }
  // }, [moviesData]);

  // useEffect(() => {
  //   if (page == 6) {
  //     getMoviesGrid();
  //   }
  // }, [moviesData]);

  //   useEffect(() => {
  //   if (page == 5) {
  //     getMoviesGrid();
  //   }
  // }, [moviesData]);

  // useEffect(() => {
  //   if (page == 4) {
  //     getMoviesGrid();
  //   }
  // }, [moviesData]);

  useEffect(() => {
    if (page == 3) {
      getMoviesGrid();
    }
  }, [moviesData]);

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
