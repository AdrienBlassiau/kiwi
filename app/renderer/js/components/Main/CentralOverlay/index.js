import React from 'react';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SubtitlesPage from './SubtitlesPage';

const CentralOverlay = () =>{
  const pageType = useSelector(state => state.overlay.overlayType);

  let centralContent;
  switch (pageType){
    case "subs":
      centralContent = <SubtitlesPage />;
      break;
    case "links":
      centralContent = <div>links</div>;
      break;
    default:
      centralContent = null;
  }

  let preparedComponent =
    <CentralOverlayStyle open={centralContent}>
      {centralContent}
    </CentralOverlayStyle>;

  return (preparedComponent)
};

export default CentralOverlay;

const CentralOverlayStyle = styled.div`
  position: fixed;
  bottom: var(--bottom-bar-height);
  left: 0;
  right: 0;
  top: ${props => props.open ? "0":"100%"};
  overflow: auto;
  z-index: 30;
  transition-property: top;
  transition-duration: 0.5s;
  background-color: var(--background-primary);
`;
