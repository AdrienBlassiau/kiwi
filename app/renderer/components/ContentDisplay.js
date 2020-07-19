import React, { useState, useEffect } from 'react';
import { usePalette } from 'react-palette';
import Moment from 'react-moment';
import axios from 'axios';
import PercentageCircle from './PercentageCircle';
import { directSearchSite } from '../scrapper/index.js';
import { getMovies } from '../controllers';
import * as utils from '../utils';

import run from '../scrapper/fetch.js';

const ContentDisplay = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const status = props.status;
  const isLoading = props.isLoading;
  const currentMovieData = props.currentMovieData;
  const setMode = props.setMode;
  // const setStatus = props.setStatus;
  // const statusType = utils.statusType;

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const genres = !isLoading ? utils.getGenre(currentMovieData) : null;

  const [overview, tagline] = !isLoading
    ? utils.getTranslation(currentMovieData, 'FR')
    : [null, null];
  // console.log('overview :', overview, 'tag:', tagline);

  const [hours, minutes] = !isLoading ? utils.getRuntime(currentMovieData) : ['', ''];

  const year = !isLoading ? utils.getYear(currentMovieData) : '';

  const [certif, realeaseDate, country] = !isLoading
    ? utils.getReleaseData(currentMovieData, 'US')
    : ['', '', ''];

  const poster = !isLoading ? utils.getPoster(currentMovieData, 'fr') : '';

  const backgroundImage = !isLoading ? utils.getBackgroundImage(currentMovieData) : '';

  const credits = !isLoading ? utils.getCredits(currentMovieData) : null;

  const [color1, color2, data] = utils.getColors(currentMovieData, poster);

  const [backgroundImageStyle, backgroundImageColor] =
    !isLoading && color1 && color2
      ? utils.getBackgroundData(color1, color2, backgroundImage, data)
      : [{}, {}];

  // let findMovie = null;
  // let circleStatusClass = null;

  // // console.log(results);
  // if (status) {
  //   if (status === statusType.NOT_FOUND) {
  //     findMovie = 'NOT_FOUND';
  //     circleStatusClass = 'circle-status-nok';
  //   } else if (status === statusType.FOUND) {
  //     findMovie = 'FOUND ! : ';
  //     circleStatusClass = 'circle-status-ok';
  //   } else {
  //     findMovie = 'LOADING ...';
  //     circleStatusClass = 'circle-status-pending';
  //   }
  // }

  const playButton = (
    // status === statusType.FOUND ? (
    <div
      className="circle-around-play"
      onClick={() => {
        // console.log('okoko');
        setMode('stream');
      }}>
      <div className="button-play"></div>
    </div>
  );
  // ) : (
  //   <div className="circle-around-dont-play">
  //     <div className="button-play"></div>
  //   </div>
  // );

  const contentDispay = !isLoading ? (
    <div style={backgroundImageStyle} className="main-content-display-container">
      <div style={backgroundImageColor} className="main-content-display-back">
        <div className="main-content-single-column">
          <section className="main-content-data-container">
            <div className="poster-wrapper">
              <div className="poster-more-display">
                <div className="main-content-poster">
                  <img
                    className="main-content-poster-content"
                    src={poster}
                    alt={currentMovieData.title}></img>
                </div>
              </div>
            </div>
            <div className="data-wrapper-container">
              <section className="data-wrapper">
                <div className="data-wrapper-title">
                  <div className="data-wrapper-title-text">
                    <span className="data-wrapper-title-text-content">
                      {currentMovieData.title}
                    </span>{' '}
                    <span className="data-wrapper-title-text-date">({year})</span>
                  </div>
                  <div className="data-wrapper-title-facts">
                    {certif !== '' ? (
                      <span className="data-wrapper-title-facts-certif">{certif}</span>
                    ) : (
                      <span></span>
                    )}
                    <span className="data-wrapper-title-facts-relea">
                      {currentMovieData.release_date} ({country})
                    </span>
                    <span className="data-wrapper-title-facts-genre">{genres}</span>
                    <span className="data-wrapper-title-facts-runtime">
                      {hours}h{minutes}m
                    </span>
                    <span className="data-wrapper-title-facts-status">
                      <div className="circle-status-container">
                        {/*                        <div className={'circle-status ' + circleStatusClass}></div>*/}
                      </div>
                    </span>
                  </div>
                </div>
                <div className="data-wrapper-infos-play">
                  <div className="data-wrapper-infos">
                    <div className="chart-block">
                      <PercentageCircle
                        percentage={currentMovieData.vote_average}
                        width={50}
                        height={50}
                        border={4}
                        fontSize1={25}
                        fontSize2={10}
                      />
                    </div>
                    <div className="chart-text">
                      User <br />
                      Score
                    </div>
                  </div>
                  <div>{playButton}</div>
                </div>
                <div className="data-wrapper-resume">
                  <div className="tag-line-master">{tagline}</div>
                  <div className="overview-text">Overview</div>
                  <div className="overview-section-text">
                    <div>{overview}</div>
                  </div>
                  <div className="people-no-image">{credits}</div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );

  return <div>{contentDispay}</div>;
};

export default ContentDisplay;
