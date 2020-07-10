import React, { useState, useEffect } from 'react';
// import Style from '../css/ContentCardCss.js';
import PercentageCircle from './PercentageCircle';
import ContentDisplay from './ContentDisplay';
import Modal from './Modal';

const ContentCard = (props) => {
  const [show, showModal] = useState(false);

  const contentDisplay = show ? (
    <ContentDisplay
      movieId={props.movie.id}
      driver={props.driver}
      setIsPlaying={props.setIsPlaying}
      setUrl={props.setUrl}
    />
  ) : null;

  return (
    <div>
      <Modal onClose={() => showModal(false)} show={show}>
        {contentDisplay}
      </Modal>
      <div className="card-main-style" onClick={showModal}>
        <div className="image-container">
          <div className="wrapper">
            <div className="image-link" title={props.movie.title}>
              <img
                className="image"
                alt=""
                src={
                  'https://image.tmdb.org/t/p/w220_and_h330_face/' + props.movie.poster_path
                }></img>
            </div>
          </div>
        </div>
        <div className="data-container-master">
          <div className="consensus-tight">
            <PercentageCircle
              percentage={props.movie.vote_average}
              width={30}
              height={30}
              border={4}
              fontSize1={15}
              fontSize2={5}
            />
          </div>
          <div className="data-container">
            <div className="movie-title">
              <div href="" title={props.movie.title}>
                {props.movie.title}
              </div>
            </div>
            <div>{props.movie.release_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
