import React, { useState, useEffect } from 'react';
// import Style from '../css/ContentCardCss.js';
import PercentageCircle from './PercentageCircle';

import AutorenewRoundedIcon from '@material-ui/icons/AutorenewRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

import logger from '../utils/logger.js';

const ContentCard = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const [hovered, setHovered] = useState(false);

  const movie = props.movie;

  const setCurrentMovieId = props.setCurrentMovieId;
  const setShowModal = props.setShowModal;
  const gridInfos = props.gridInfos;

  const type = gridInfos.type;
  const id = movie.id;
  const title = movie.title;
  const poster_path = movie.poster_path;

  const date =
    type === 'movie'
      ? movie.hasOwnProperty('release_date')
        ? movie.release_date.split('-')[0]
        : ''
      : movie.first_air_date.split('-')[0];

  const handlePreload = (e) => {
    e.stopPropagation();

    setCurrentMovieId(id);
    logger.debug('(fire from handlePreload) handleMoreInfos');
  };

  const handleOpenModal = (e) => {
    handlePreload(e);
    setShowModal(true);
  };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <div
        className="card-main-style"
        onClick={handleOpenModal}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        {hovered ? (
          <React.Fragment>
            <div className="movie-title-infos">
              <div className="movie-title-relative">
                {title} ({date})
              </div>
            </div>
            <div className="card-action-container">
              <div className="card-action-box">
                <div className="card-action">
                  <FavoriteRoundedIcon />
                </div>
                <div className="card-action">
                  <VisibilityRoundedIcon />
                </div>
                <div className="card-action" onClick={handlePreload}>
                  <AutorenewRoundedIcon />
                </div>
                <div className="card-action">
                  <GetAppRoundedIcon />
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : null}
        <div className="image-container">
          <div className="wrapper">
            <div className="image-link">
              <img
                className="image"
                alt=""
                src={'https://image.tmdb.org/t/p/w220_and_h330_face/' + movie.poster_path}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
