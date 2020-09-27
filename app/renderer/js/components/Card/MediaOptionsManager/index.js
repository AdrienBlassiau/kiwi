import React, { useState } from 'react';
import styled from 'styled-components';
import IconHeartMedium from '../../Icon/IconHeartMedium';
import IconSeeMoreMedium from '../../Icon/IconSeeMoreMedium';
import IconWatchlistMedium from '../../Icon/IconWatchlistMedium';
import IconWatchMedium from '../../Icon/IconWatchMedium';
import SeeMoreBox from '../../SeeMoreBox/index.js';

const MediaOptionsManager = (props) =>{

  const absolute = props.absolute;
  const withCircle = props.withCircle;
  const [watch, setWatch] = useState(false);
  const [like, setLike] = useState(false);
  const [watchList, setWatchList] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  let preparedComponent =
    <MediaOptionsManagerAbsoluteStyle absolute={absolute}>
      <MediaOptionsManagerListStyle >
        <MediaOptionsManagerStyle withCircle={withCircle} onClick={(e) => {e.stopPropagation(); setLike(!like)}}>
          <IconHeartMedium add={like}/>
        </MediaOptionsManagerStyle>
        <MediaOptionsManagerStyle withCircle={withCircle} onClick={(e) => {e.stopPropagation(); setWatch(!watch)}}>
          <IconWatchMedium add={watch}/>
        </MediaOptionsManagerStyle>
        <MediaOptionsManagerStyle withCircle={withCircle} onClick={(e) => {e.stopPropagation(); setWatchList(!watchList)}}>
          <IconWatchlistMedium add={watchList}/>
        </MediaOptionsManagerStyle>
        <MediaOptionsManagerStyle withCircle={withCircle} onClick={(e) => {e.stopPropagation(); setSeeMore(!seeMore)}}>
          <SeeMoreBox seeMore={seeMore}/>
          <IconSeeMoreMedium
            color={"var(--text-primary)"}
          />
        </MediaOptionsManagerStyle>
      </MediaOptionsManagerListStyle>
    </MediaOptionsManagerAbsoluteStyle>;

  return (preparedComponent)
};

const MediaOptionsManagerListStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

const MediaOptionsManagerStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-primary);
  border-radius: 100px;
  height: 37px;
  width: 37px;
  box-shadow: ${props => props.withCircle ? "0px 3px 5px 0px rgba(0, 0, 0, 0.25);" : "none"};
  cursor: pointer;
`;

const MediaOptionsManagerAbsoluteStyle = styled.div`
  position: ${props => props.absolute ? "absolute" : "relative"};
  z-index: 10;
  width: 100%;
`;

export default MediaOptionsManager;
