import React, { useState, useEffect } from 'react';
// import Style from '../css/ContentCardCss.js';
import PercentageCircle from './PercentageCircle';

const ContentCard = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const movie = props.movie;
  const callQueue = props.callQueue;
  const setCallQueue = props.setCallQueue;
  const setCurrentMovieBasics = props.setCurrentMovieBasics;
  const setShowModal = props.setShowModal;

  const handleOpenModal = () => {
    console.log(movie);
    const id = movie.id;
    const title = movie.title;
    const date = movie.release_date.split('-')[0];
    setCurrentMovieBasics({ id, title, date });
    setShowModal(true);
    callQueue.push({ id, title, date });
    setCallQueue(callQueue);
  };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <div className="card-main-style" onClick={handleOpenModal}>
        <div className="image-container">
          <div className="wrapper">
            <div className="image-link" title={movie.title}>
              <img
                className="image"
                alt=""
                src={'https://image.tmdb.org/t/p/w220_and_h330_face/' + movie.poster_path}></img>
            </div>
          </div>
        </div>
        {/*        <div className="data-container-master">
          <div className="consensus-tight">
            <PercentageCircle
              percentage={movie.vote_average}
              width={30}
              height={30}
              border={4}
              fontSize1={15}
              fontSize2={5}
            />
          </div>
          <div className="data-container">
            <div className="movie-title">
              <div href="" title={movie.title}>
                {movie.title}
              </div>
            </div>
            <div>{movie.release_date}</div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default ContentCard;
