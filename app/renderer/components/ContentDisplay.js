import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { usePalette } from 'react-palette';
import PercentageCircle from './PercentageCircle';

import * as utils from '../utils';

import logger from '../utils/logger.js';

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
    <MainContentDisplayPlayCircle
      onClick={() => {
        // console.log('okoko');
        setMode('stream');
      }}>
      <MainContentDisplayPlay></MainContentDisplayPlay>
    </MainContentDisplayPlayCircle>
  );
  // ) : (
  //   <div className="circle-around-dont-play">
  //     <div className="button-play"></div>
  //   </div>
  // );

  const contentDispay = !isLoading ? (
    <MainContentDisplayContainer style={backgroundImageStyle}>
      <MainContentDisplayBack style={backgroundImageColor}>
        <MainContentDisplaySingleColumn>
          <MainContentDisplayDataContainer>
            <MainContentDisplayPosterWrapper>
              <MainContentDisplayPoster>
                <MainContentDisplayPoster>
                  <MainContentDisplayPosterContent
                    src={poster}
                    alt={currentMovieData.title}></MainContentDisplayPosterContent>
                </MainContentDisplayPoster>
              </MainContentDisplayPoster>
            </MainContentDisplayPosterWrapper>
            <MainContentDisplayWrapperContainer>
              <MainContentDisplayWrapper>
                <MainContentDisplayWrapperTitle>
                  <MainContentDisplayWrapperTitleText>
                    <MainContentDisplayWrapperTitleTextContent>
                      {currentMovieData.title}
                    </MainContentDisplayWrapperTitleTextContent>{' '}
                    <MainContentDisplayWrapperTitleTextDate>
                      ({year})
                    </MainContentDisplayWrapperTitleTextDate>
                  </MainContentDisplayWrapperTitleText>
                  <MainContentDisplayWrapperTitleFacts>
                    {certif !== '' ? (
                      <MainContentDisplayWrapperTitleFactsCertif>
                        {certif}
                      </MainContentDisplayWrapperTitleFactsCertif>
                    ) : (
                      <span></span>
                    )}
                    <MainContentDisplayWrapperTitleFactsRelease>
                      {currentMovieData.release_date} ({country})
                    </MainContentDisplayWrapperTitleFactsRelease>
                    <MainContentDisplayWrapperTitleFactsGenre>
                      {genres}
                    </MainContentDisplayWrapperTitleFactsGenre>
                    <MainContentDisplayWrapperTitleFactsRuntime>
                      {hours}h{minutes}m
                    </MainContentDisplayWrapperTitleFactsRuntime>
                    <MainContentDisplayWrapperTitleFactsStatus>
                      <CircleStatusContainer>
                        {/*                        <div className={'circle-status ' + circleStatusClass}></div>*/}
                      </CircleStatusContainer>
                    </MainContentDisplayWrapperTitleFactsStatus>
                  </MainContentDisplayWrapperTitleFacts>
                </MainContentDisplayWrapperTitle>
                <DataWrapperInfosPlay>
                  <DataWrapperInfos>
                    <DataWrapperChartBlock>
                      <PercentageCircle
                        percentage={currentMovieData.vote_average}
                        width={50}
                        height={50}
                        border={4}
                        fontSize1={25}
                        fontSize2={10}
                      />
                    </DataWrapperChartBlock>
                    <DataWrapperChartText>
                      User <br />
                      Score
                    </DataWrapperChartText>
                  </DataWrapperInfos>
                  <div>{playButton}</div>
                </DataWrapperInfosPlay>
                <DataWrapperResume>
                  <DataWrapperTagLine>{tagline}</DataWrapperTagLine>
                  <DataWrapperOverviewTitle>Overview</DataWrapperOverviewTitle>
                  <DataWrapperOverviewText>
                    <div>{overview}</div>
                  </DataWrapperOverviewText>
                  <DataWrapperOverviewCredits>{credits}</DataWrapperOverviewCredits>
                </DataWrapperResume>
              </MainContentDisplayWrapper>
            </MainContentDisplayWrapperContainer>
          </MainContentDisplayDataContainer>
        </MainContentDisplaySingleColumn>
      </MainContentDisplayBack>
    </MainContentDisplayContainer>
  ) : (
    <div></div>
  );

  return <div>{contentDispay}</div>;
};

////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const MainContentDisplayContainer = styled.div`
  background-position: right -200px top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const MainContentDisplayBack = styled.div`
  width: 100%;
`;

const MainContentDisplaySingleColumn = styled.div`
  background: transparent;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1300px;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  z-index: 0;
  box-sizing: border-box;
`;

const MainContentDisplayDataContainer = styled.section`
  display: flex;
  flex-wrap: nowrap;
`;

const MainContentDisplayPosterWrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  border-width: 0px;
  min-width: 300px;
  width: 300px;
  overflow: hidden;
  border-radius: var(--imageBorderRadius);
`;

const MainContentDisplayPoster = styled.div`
  width: 100%;
  min-width: 100%;
  height: 100%;
`;

const MainContentDisplayPosterContent = styled.img`
  display: block;
  width: 100%;
  min-width: 100%;
  border-width: 0px;
  outline: none;
`;

const MainContentDisplayWrapperContainer = styled.div`
  display: flex;
`;

const MainContentDisplayWrapper = styled.section`
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: center;
  box-sizing: border-box;
  padding-left: 40px;
`;

const MainContentDisplayWrapperTitle = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
`;

const MainContentDisplayWrapperTitleText = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 2.2rem;
  font-weight: 600;
`;

const MainContentDisplayWrapperTitleTextContent = styled.span`
  color: white;
  font-weight: 700;
`;

const MainContentDisplayWrapperTitleTextDate = styled.span`
  opacity: 0.8;
  font-weight: 400;
  font-size: 2.2rem;
  color: white;
`;

const MainContentDisplayWrapperTitleFacts = styled.div`
  display: flex;
  color: white;
`;

const MainContentDisplayWrapperTitleFactsCertif = styled.span`
  border: 1px solid rgba(100%, 100%, 100%, 0.6);
  color: rgba(100%, 100%, 100%, 0.6);
  display: inline-flex;
  white-space: nowrap;
  align-items: center;
  align-content: center;
  padding: 0.06em 4px 0.15em 4px !important;
  line-height: 1;
  border-radius: 2px;
  margin-right: 7px;
`;

const MainContentDisplayWrapperTitleFactsRelease = styled.span`
  color: white;
  position: relative;
  top: 0;
  left: 0;
  padding-left: 0;

  &:before {
    content: '';
    font-size: 1.1em;
    line-height: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 7px;
    display: inline-flex;
    align-content: center;
    align-items: center;
  }
`;

const MainContentDisplayWrapperTitleFactsGenre = styled.span`
  color: white;
  padding-left: 20px;
  position: relative;
  top: 0;
  left: 0;

  &:before {
    color: white;
    font-size: 1.1em;
    line-height: 1;
    content: '•';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 7px;
    display: inline-flex;
    align-content: center;
    align-items: center;
  }
`;

const MainContentDisplayWrapperTitleFactsRuntime = styled.span`
  color: white;
  padding-left: 20px;
  position: relative;
  top: 0;
  left: 0;

  &:before {
    color: white;
    font-size: 1.1em;
    line-height: 1;
    content: '•';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 7px;
    display: inline-flex;
    align-content: center;
    align-items: center;
  }
`;

const MainContentDisplayWrapperTitleFactsStatus = styled.span`
  color: white;
  padding-left: 20px;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const CircleStatusContainer = styled.div`
  display: flex;
`;

const DataWrapperInfos = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
`;

const DataWrapperInfosPlay = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const DataWrapperChartBlock = styled.div`
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 68px;
`;

const DataWrapperChartText = styled.div`
  font-weight: 700;
  margin-left: 6px;
  white-space: pre-line;
`;

const DataWrapperResume = styled.div`
  width: 100%;
  color: white;
`;

const DataWrapperTagLine = styled.div`
  margin-bottom: 0;
  font-size: 1.1em;
  font-weight: 400;
  font-style: italic;
  opacity: 0.7;
  width: 100%;
  margin: 0 0 8px 0;
  margin-bottom: 8px;
`;

const DataWrapperOverviewTitle = styled.div`
  margin-top: 10px;
  padding: 0;
  color: white;
  box-sizing: border-box;
  width: 100%;
  margin: 0 0 8px 0;
  margin-top: 0px;
  font-weight: 600;
  font-size: 1.3em;
`;

const DataWrapperOverviewText = styled.div`
  color: white;
`;

const DataWrapperOverviewCredits = styled.div`
  margin-top: 20px !important;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  list-style-position: inside;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  top: 0;
  left: 0;
`;

const MainContentDisplayPlay = styled.div`
  border-style: solid;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-width: 20px 0px 20px 30px;
  border-color: transparent transparent transparent white;
`;

const MainContentDisplayPlayCircle = styled.div`
  background-color: var(--dark-blue-color);
  border-radius: 50%;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 5px 2px 10px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 2px 10px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 2px 10px -4px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default ContentDisplay;
