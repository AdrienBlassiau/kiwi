import React from 'react';

import styled from 'styled-components';

import Style from './Style/index.js';
import StickyTopBar from './StickyTopBar/index.js';
import TopBar from './TopBar/index.js';
import LeftBar from './LeftBar/index.js';
import BottomBar from './BottomBar/index.js';
import CentralMain from './CentralMain/index.js';
import CentralOverlay from './CentralOverlay/index.js';

const Main = () =>{

  let preparedComponent =
    <MainStyle>
      <Style />
      <StickyTopBar />
      <TopBar/>
      <LeftBar/>
      <BottomBar/>
      <CentralMain/>
      <CentralOverlay/>
    </MainStyle>;

  return (preparedComponent)
};

const MainStyle = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
`;

export default Main;
