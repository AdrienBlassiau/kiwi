import React from 'react';
import styled from 'styled-components';

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const remote = require('electron').remote;

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////  HANDLING EVENTS  /////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const handleMinimize = () => {
  var window = remote.getCurrentWindow();
  window.minimize();
};

const handleMaximize = () => {
  var window = remote.getCurrentWindow();
  if (!window.isMaximized()) {
    window.maximize();
  } else {
    window.unmaximize();
  }
};

const handleClose = () => {
  var window = remote.getCurrentWindow();
  window.close();
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////  COMPONENTS  ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const StickyTopBar = () => {

  return (
    <MainTopBarContainer>
      <MainTopBarStyle>
        <TopBarAction>
          <CustomIconBars onClick={handleMinimize}>
            <RemoveIcon />
          </CustomIconBars>
          <CustomIconBars onClick={handleMaximize}>
            <AddIcon />
          </CustomIconBars>
          <CustomIconBars onClick={handleClose}>
            <CloseRoundedIcon />
          </CustomIconBars>
        </TopBarAction>
      </MainTopBarStyle>
    </MainTopBarContainer>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const MainTopBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  -webkit-app-region: drag;
  background-color: var(--main-color-1-1);
  color: var(--main-color-3);
  height: 30px;
  padding: 0;
  height: 30px;
  line-height: 30px;
  justify-content: left;
  overflow: visible;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  width: 100%;
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
  display: flex;
  z-index: 99999;
  height: 10px;
`;

const MainTopBarStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const TopBarAction = styled.div`
  -webkit-app-region: no-drag;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const CustomIconBars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder !important ;
  cursor: pointer;
  margin: 0 5px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export default StickyTopBar;
