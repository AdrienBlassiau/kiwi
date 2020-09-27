import React, { useState } from 'react';
import styled from 'styled-components';

import RatingManager from '../RatingManager/index.js';
import RatingBox from '../RatingBox/index.js';
import TopCard from '../TopCard/index.js';
import LoadingStatusManager from '../LoadingStatusManager/index.js';
import MediaOptionsManager from '../MediaOptionsManager/index.js';
import { useDispatch } from 'react-redux';
import { changePage } from '../../../store/mainPage';

const MovieCard = (props) =>{
  const [mouseOver, setMouseOver] = useState(false);
  const dispatch = useDispatch();

  let index = props.index;
  const [showRating, setShowRating] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const globalRating = 7.5;
  const cardPoster = "/home/adrien/Documents/.kiwi/images/poster.jpg";
  const alreadyWatched = false;

  const handleMoviePage = () => {
    dispatch(changePage({mainType:"movie",id:0}));
  }

  let preparedComponent =
    <CardStyle index={index}>
      <RatingBox
        showRating={showRating}
        globalRating={globalRating}
      />
      <CardTopContainerStyle>
        <TopCard />
      </CardTopContainerStyle>
      <CardMainContainerStyle
        onMouseEnter={(e) => {e.stopPropagation(); setMouseOver(true)}}
        onMouseLeave={(e) => {e.stopPropagation(); setMouseOver(false)}}
      >
        {alreadyWatched ? <CardOverlayStyle /> : null}
        {mouseOver ? <MediaOptionsManager absolute={true} withCircle={true}/> : null}
        <LoadingStatusManager/>
        <CardBackgroundStyle src={cardPoster}  alt={"logo"}/>
      </CardMainContainerStyle>
      <CardSubContainerStyle>
        <CardFirstRowStyle onClick={handleMoviePage}>
          I'm Thinking of ending things
        </CardFirstRowStyle>
        <CardSecondRowStyle>
          <CardSecondRowDateStyle>
            2020
          </CardSecondRowDateStyle>
          <CardSecondRowRatingStyle>
            <RatingManager
              globalRating={globalRating}
              setUserRating={setUserRating}
              userRating={userRating}
              setShowRating={setShowRating}
              showRating={showRating}
            />
          </CardSecondRowRatingStyle>
        </CardSecondRowStyle>
      </CardSubContainerStyle>
    </CardStyle>;

  return (preparedComponent)
};

const CardOverlayStyle = styled.div`
  position: absolute;
  background-color: rgba(256,256,256,0.8);
  width: 100%;
  height: 100%;
`;

const CardTopContainerStyle = styled.div`

`;

const CardSecondRowRatingStyle = styled.div`
`;

const CardSecondRowDateStyle = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-intermediate);
  font-size: 12px;
`;
const CardSecondRowStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0;
  color: var(--text-intermediate);
  font-size: 12px;
  margin-top: 5px;
`;

const CardFirstRowStyle = styled.div`
  width: min-content;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  &:hover{
    border-bottom: 1px solid var(--text-primary);
  }
`;

const CardBackgroundStyle = styled.img`
  width: 100%;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.4);
`;

const CardMainContainerStyle = styled.div`
  position: relative;
  width: 100%;
  height: 330px;
  &:hover ${CardBackgroundStyle}{
    background-color: var(--background-primary);
    opacity: 0.76;
  }
`;

const CardStyle = styled.div`
  position: relative;
  display: flex;
  min-width: 220px;
  max-width: 220px;
  width: 220px;
  flex-direction: column;
`;

const CardSubContainerStyle = styled.div`
  margin: 10px 0;
  width: 100%
`;

export default MovieCard;
