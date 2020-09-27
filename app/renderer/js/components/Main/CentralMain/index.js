import React from 'react';

import styled from 'styled-components';
import MovieMainPage from './MovieMainPage';
import MoviePage from './MoviePage';
import { useSelector } from 'react-redux';

const CentralMain = () =>{

  const pageType = useSelector(state => state.page.mainType);

  let centralContent;
  switch (pageType){
    case "movieMain":
      centralContent = <MovieMainPage/>;
      break;
    case "movie":
      centralContent = <MoviePage/>
      break;
    default:
      centralContent = null;
  }
  let preparedComponent =
    <CentralMainStyle>
      <CentralMainContainerStyle>
        {centralContent}
      </CentralMainContainerStyle>
    </CentralMainStyle>;

  return (preparedComponent)
};

const CentralMainContainerStyle = styled.div`
  height: 100%;
  width: 100%;
`;

const CentralMainStyle = styled.div`
  position: fixed;
  top: var(--top-bar-height);
  left: var(--left-bar-width);
  bottom: var(--bottom-bar-height);
  right: 0;
  overflow: auto;
  z-index: 10;
`;

export default CentralMain;
