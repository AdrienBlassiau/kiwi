import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const handler = (
  myRef,
  scroll,
  setScroll,
  isFetching,
  setIsFetching,
  hasMore,
  getMoviesGrid,
  moviesData,
) => {
  useEffect(() => {
    if (isFetching) {
      setIsFetching(false);
    }
  }, [moviesData]);

  useEffect(() => {
    if (isFetching) {
      setTimeout(() => {
        getMoviesGrid();
      }, 1000);
    }
  }, [isFetching]);

  useEffect(() => {
    if (scroll && !isFetching && hasMore) {
      const component = ReactDOM.findDOMNode(myRef.current);
      if (component.scrollHeight != component.scrollTop + component.clientHeight || isFetching) {
        return;
      } else {
        setIsFetching(true);
        return;
      }
    }
  }, [scroll]);

  const handleScroll = () => {
    const component = ReactDOM.findDOMNode(myRef.current);
    setScroll([component.scrollHeight, component.scrollTop, component.clientHeight]);
  };

  useEffect(() => {
    const component = ReactDOM.findDOMNode(myRef.current);
    component.addEventListener('scroll', handleScroll);
    return () => component.removeEventListener('scroll', handleScroll);
  }, []);
};

module.exports = {
  handler,
};
