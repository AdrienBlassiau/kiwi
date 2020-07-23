import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

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
    <LoadMovieItemMaster>
      <LoadMovieItem>
        <LoadGroup>
          <CardMainStyleMin>
            <ImageContainerMin>
              <ImageContainerWrapper>
                <ImageContainerLink>
                  <ImageContainerImage
                    alt=""
                    src={
                      'https://image.tmdb.org/t/p/w220_and_h330_face/' + movie.poster_path
                    }></ImageContainerImage>
                </ImageContainerLink>
              </ImageContainerWrapper>
            </ImageContainerMin>
          </CardMainStyleMin>
          <LoadBoxMainInfos>
            <div>{movie.title}</div>
            <div>{movie.date}</div>
          </LoadBoxMainInfos>
        </LoadGroup>
        <LoadGroup>
          <LoadBoxLoadInfos>
            <div> {loadInfos ? loadInfos.nbSolved + '/' + totalScrapper : 'nan'} solved</div>
            <div>{type == 'load' ? '0' : '0'} Failed</div>
          </LoadBoxLoadInfos>
          <LoadBoxIcon></LoadBoxIcon>
        </LoadGroup>
      </LoadMovieItem>
      <LinearProgress
        variant="determinate"
        className="custom-load-bar"
        value={loadingBarProgress}
      />
    </LoadMovieItemMaster>
  );
};

export default LoadLine;

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const LoadMovieItemMaster = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LoadMovieItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LoadBoxMainInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 20px;
`;

const LoadBoxLoadInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const LoadBoxIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoadGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CustomLoadBar = styled.div`
  width: 100%;
  background-color: var(--main-color-2);
`;

const CardMainStyleMin = styled.div`
  position: relative;
  width: 75px;
  min-width: 75px;
  background: transparent;
  border: none;
  box-shadow: none;
  margin-top: 0;
  overflow: visible;
  padding: 5px;
  cursor: pointer;
`;

const ImageContainerMin = styled.div`
  border-radius: 4px;
  width: 100%;
  // min-height: calc(150px * 1.5);
  // height: calc(150px * 1.5);
  min-height: calc(75px * 1.5);
  height: calc(75px * 1.5);
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.25);
  -moz-box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.25);
`;

const ImageContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

const ImageContainerLink = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const ImageContainerImage = styled.img`
  width: 100%;
  height: 100%;
  min-width: 1px;
  min-height: 1px;
  outline: none;
  box-sizing: border-box;
  border: 0;
`;
