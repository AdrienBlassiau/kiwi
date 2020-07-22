import React, { useState, useEffect } from 'react';
import { movieUrl } from '../controllers';
import LoadingBar from 'react-top-loading-bar';
import { LinearProgress } from '@material-ui/core';
import { totalScrapper } from '../scrapper/index.js';

const LoadLine = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  const solvedQueue = props.solvedQueue;
  const movie = props.movie;
  const loadInfos = props.loadInfos;
  const cache = props.cache;
  const type = props.type;

  const add = (value) => {
    setLoadingBarProgress(loadingBarProgress + value);
  };

  const set = (value) => {
    setLoadingBarProgress(value);
  };

  const complete = () => {
    setLoadingBarProgress(100);
  };

  const onLoaderFinished = () => {
    setLoadingBarProgress(0);
  };

  useEffect(() => {
    console.log('ENTREE:', type);
    if (loadInfos) {
      if (type == 'load') {
        let loadNumber = (loadInfos.nbSolved / totalScrapper) * 100;
        set(loadNumber);
      } else {
        console.log('solved');
        complete();
      }
    }
  }, [loadInfos]);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////  HANDLING EVENTS  /////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div className="load-movie-item-master">
      <div className="load-movie-item">
        <div className="load-group">
          <div className="card-main-style-min">
            <div className="image-container-min">
              <div className="wrapper">
                <div className="image-link">
                  <img
                    className="image"
                    alt=""
                    src={
                      'https://image.tmdb.org/t/p/w220_and_h330_face/' + movie.poster_path
                    }></img>
                </div>
              </div>
            </div>
          </div>
          <div className="load-box-main-infos">
            <div>{movie.title}</div>
            <div>{movie.date}</div>
          </div>
        </div>
        <div className="load-group">
          <div className="load-box-load-infos">
            <div> {loadInfos ? loadInfos.nbSolved + '/' + totalScrapper : 'nan'} solved</div>
            <div>{type == 'load' ? '0' : '0'} Failed</div>
          </div>
          <div className="load-box-icon"></div>
        </div>
      </div>
      <LinearProgress
        variant="determinate"
        className="custom-load-bar"
        value={loadingBarProgress}
      />
    </div>
  );
};

export default LoadLine;
