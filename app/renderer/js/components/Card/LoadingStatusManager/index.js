import React, { useState } from 'react';
import styled from 'styled-components';
import IconLoadingLinkMedium from '../../Icon/IconLoadingLinkMedium';
import IconQueueMedium from '../../Icon/IconQueueMedium';
import IconPlayMedium from '../../Icon/IconPlayMedium';
import IconPauseMedium from '../../Icon/IconPauseMedium';
import IconLoadingMedium from '../../Icon/IconLoadingMedium';
import TitleInfos from '../../TitleInfos';

const LoadingStatusManager = (props) =>{
  const [mouseOver, setMouseOver] = useState(false);

  let loadingStatus = "pause"
  let statusIcon;

  switch (loadingStatus) {
    case "loadingData":
      statusIcon = <IconLoadingMedium color={"var(--text-primary-opacity)"}/>;
      break;
    case "waitingQueue":
      statusIcon = <IconQueueMedium color={"var(--text-primary)"}/>;
      break;
    case "onQueue":
      statusIcon = <IconQueueMedium color={"var(--text-primary-opacity)"}/>;
      break;
    case "waitingLoadingLink":
      statusIcon = <IconLoadingLinkMedium color={"var(--text-primary)"}/>;
      break;
    case "loadingLink":
      statusIcon = <IconLoadingLinkMedium color={"var(--text-primary-opacity)"}/>;
      break;
    case "play":
      statusIcon = <IconPlayMedium color={"var(--text-primary)"}/>;
      break;
    case "pause":
      statusIcon = <IconPauseMedium color={"var(--text-primary)"}/>;
      break;
    default:
      statusIcon = <IconLoadingMedium color={"var(--text-primary)"}/>;
      break;
  }

  let preparedComponent =
    <LoadingStatusManagerAbsoluteStyle>
      <LoadingStatusManagerStyle
          onMouseEnter={(e) => {e.stopPropagation(); setMouseOver(true)}}
          onMouseLeave={(e) => {e.stopPropagation(); setMouseOver(false)}}
      >
        <TitleInfos mouseOver={mouseOver} text={"loading ..."}/>
        <LoadingContainerStyle>
          {statusIcon}
        </LoadingContainerStyle>
      </LoadingStatusManagerStyle>
    </LoadingStatusManagerAbsoluteStyle>;

  return (preparedComponent)
};

const LoadingContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-primary);
  border-radius: 100px;
  height: 45px;
  width: 45px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
`;

const LoadingStatusManagerStyle = styled.div`
  position: relative;
`;

const LoadingStatusManagerAbsoluteStyle = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 9;
`;


export default LoadingStatusManager;
