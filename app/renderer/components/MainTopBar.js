import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import { useDispatch, useSelector } from "react-redux";
import Crop169RoundedIcon from '@material-ui/icons/Crop169Rounded';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { loginSuccess } from '../js/store';

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

const MainTopBar = () => {

  const token = useSelector(state => state);
  console.log("token: "+Object.keys(token.auth));
  const dispatch = useDispatch();
  dispatch(loginSuccess());

  return (
    <MainTopBarContainer>
      <MainTopBarStyle>
        <MainTopBarFeatures>
          <div>Kiwi</div>
          <CustomFeaturesList>
            <CustomFeatures>App</CustomFeatures>
            <CustomFeatures>Theme</CustomFeatures>
            <CustomFeatures>Help</CustomFeatures>
          </CustomFeaturesList>
        </MainTopBarFeatures>
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
`;

const MainTopBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MainTopBarFeatures = styled.div`
  display: flex;
`;

const CustomFeatures = styled.div`
  padding: 0 10px;
`;

const CustomFeaturesList = styled.div`
  display: flex;
  opacity: 0.5;
  margin: 0 20px;
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

export default MainTopBar;
