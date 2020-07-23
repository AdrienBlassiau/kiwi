import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

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
    <CardMainStyle
      onClick={handleOpenModal}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {hovered ? (
        <React.Fragment>
          <MovieTitleInfos>
            <MovieTitleRelative>
              {title} ({date})
            </MovieTitleRelative>
          </MovieTitleInfos>
          <CardActionContainer>
            <CardActionBox>
              <CardAction>
                <FavoriteRoundedIcon />
              </CardAction>
              <CardAction>
                <VisibilityRoundedIcon />
              </CardAction>
              <CardAction onClick={handlePreload}>
                <AutorenewRoundedIcon />
              </CardAction>
              <CardAction>
                <GetAppRoundedIcon />
              </CardAction>
            </CardActionBox>
          </CardActionContainer>
        </React.Fragment>
      ) : null}
      <ImageContainer>
        <ImageContainerWrapper>
          <ImageContainerLink>
            <ImageContainerImage
              alt=""
              src={
                'https://image.tmdb.org/t/p/w220_and_h330_face/' + movie.poster_path
              }></ImageContainerImage>
          </ImageContainerLink>
        </ImageContainerWrapper>
      </ImageContainer>
    </CardMainStyle>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const ImageContainer = styled.div`
  border-radius: 4px;
  width: 100%;
  min-height: calc(150px * 1.5);
  height: calc(150px * 1.5);
  // min-height: calc(75px * 1.5);
  // height: calc(75px * 1.5);
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.25);
  -moz-box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.25);
`;

const CardMainStyle = styled.div`
  position: relative;
  width: 150px;
  min-width: 150px;
  // width: 75px;
  // min-width: 75px;
  background: transparent;
  border: none;
  box-shadow: none;
  margin-top: 0;
  overflow: visible;
  padding: 5px;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
    background-color: var(--main-color-4);
  }

  &:hover ${ImageContainer.selector} {
    filter: brightness(70%);
  }
`;

const MovieTitleInfos = styled.div`
  position: absolute;
  font-size: 10px;
  top: -15px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  text-align: center;
  background-color: var(--main-color-4);
  color: white;
  padding: 5px;
  border-radius: 4px;
`;

const MovieTitleRelative = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    width: 0;
    height: 0;
    border-top: solid 10px var(--main-color-4);
    border-left: solid 10px transparent;
    border-right: solid 10px transparent;
  }
`;

const CardActionContainer = styled.div`
  position: absolute;
  z-index: 4;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardActionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  height: 40px;
  background-color: var(--main-color-1);
  border-radius: 4px;
  opacity: 0.9;
`;

const CardAction = styled.div`
  margin: 0 5px;
  line-height: 0;
  color: var(--main-color-3);
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

export default ContentCard;
