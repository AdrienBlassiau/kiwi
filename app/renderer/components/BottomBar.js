import React from 'react';
import styled from 'styled-components';

const BottomBar = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <MainBottomContainer>
      <MainBottomContainerData>
        <MainBottomContainerSiteName>Kiwi</MainBottomContainerSiteName>
        <MainBottomContainerSiteName>BETA</MainBottomContainerSiteName>
      </MainBottomContainerData>
    </MainBottomContainer>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const MainBottomContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--dark-white-color);
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  font-size: 13px;
  padding: 0 16px;
  overflow: hidden;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  user-select: none;
  zoom: 1;
  line-height: 22px;
  height: 30px;
  z-index: 99999;
  -webkit-box-shadow: 0px -7px 10px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -7px 10px -11px rgba(0, 0, 0, 0.75);
  box-shadow: 0px -7px 10px -11px rgba(0, 0, 0, 0.75);
`;

const MainBottomContainerData = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MainBottomContainerSiteName = styled.div`
  color: white;
`;

export default BottomBar;
