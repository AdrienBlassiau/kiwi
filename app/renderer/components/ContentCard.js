import React, { useState, useEffect } from 'react';
// import Style from '../css/ContentCardCss.js';
import PercentageCircle from './PercentageCircle';

import AutorenewRoundedIcon from '@material-ui/icons/AutorenewRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

const ContentCard = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const [hovered,setHovered] = useState(false)

  const movie = props.movie;
  const callQueue = props.callQueue;
  const setCallQueue = props.setCallQueue;
  const setCurrentMovieBasics = props.setCurrentMovieBasics;
  const setShowModal = props.setShowModal;
  const gridInfos = props.gridInfos
  const snack = props.snack

  const type = gridInfos.type
  const id = movie.id;
  const title = movie.title;
  const date = type==="movie" ? (movie.hasOwnProperty('release_date') ? movie.release_date.split('-')[0] : "") : movie.first_air_date.split('-')[0];

  useEffect(() => {
    console.log("CHANGMENT CALL QUEUE")
  }, [callQueue]);

  const handleOpenModal = () => {
    console.log("OPEN MODAL")
    setHovered(false)
    setCurrentMovieBasics({ id, title, date });
    setShowModal(true);

    let newCallQueue = callQueue.concat([{ id, title, date }]);
    setCallQueue(newCallQueue);
  };

  const handlePreload = (e) => {
    e.stopPropagation();
    let newCallQueue = callQueue.concat([{ id, title, date }]);
    setCallQueue(newCallQueue);

    let newSnackQueue = snack.snackQueue.concat([{ text:title+" added to the queue"}]);
    snack.setSnackQueue(newSnackQueue)
  }

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
        {hovered ?
          <React.Fragment>
            <div className="movie-title-infos">
              <div className="movie-title-relative">{title} ({date})</div>
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
          </React.Fragment>: null}
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
