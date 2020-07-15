import React, { useState, useEffect } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import axios from 'axios';

const StreamBar = (props) => {
  const {
    currentMovieId,
    currentMovieUrl,
    currentMovieData,
    showModal,
    isPlaying,
  } = props.getters.movie;
  const {
    setCurrentMovieId,
    setCurrentMovieUrl,
    setCurrentMovieData,
    setShowModal,
    setIsPlaying,
  } = props.setters.movie;

  return (
    <div className="main-stream-bar-container">
      <div className="main-stream-infos">
        <div className="main-stream-right-infos">
          <div className="custom-chevron-left-icon" onClick={() => setIsPlaying(false)}>
            <ChevronLeftIcon style={{ width: '50px', height: '50px' }} />
          </div>
          <div>You're watching: {currentMovieData.title}</div>
        </div>
      </div>
    </div>
  );
};

export default StreamBar;