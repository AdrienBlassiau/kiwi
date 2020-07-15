import React, { useState, useEffect, useRef } from 'react';
import ContentManager from './ContentManager';
import ReactDOM from 'react-dom';

const MainContainer = (props) => {
  const myRef = useRef(null);

  const {
    currentMovieId,
    currentMovieUrl,
    currentMovieData,
    showModal,
    isPlaying,
  } = props.getters.movie;

  return (
    <div ref={myRef} className={isPlaying ? 'main-container-reduced' : 'main-container'}>
      <ContentManager myRef={myRef} getters={props.getters} setters={props.setters} />
    </div>
  );
};

export default MainContainer;
