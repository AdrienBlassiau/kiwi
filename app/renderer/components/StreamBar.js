import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import axios from 'axios';

const StreamBar = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const setMode = props.setMode;
  const currentMovieData = props.currentMovieData;

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <MainStreamBarContainer>
      <MainStreamInfos>
        <MainStreamRightInfos>
          <CustomChevronLeftIcon onClick={() => setMode('search')}>
            <ChevronLeftIcon style={{ width: '50px', height: '50px' }} />
          </CustomChevronLeftIcon>
          <div>You're watching: {currentMovieData.title}</div>
        </MainStreamRightInfos>
      </MainStreamInfos>
    </MainStreamBarContainer>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const MainStreamBarContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--dark-white-color);
  color: white;
  padding: 0;
  line-height: 30px;
  justify-content: left;
  overflow: visible;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  box-sizing: border-box;
  width: 100%;
  font-size: 30px;
  padding: 0 16px;
  overflow: hidden;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  user-select: none;
  zoom: 1;
  line-height: 22px;
  height: 70px;
  display: flex;
  z-index: 99999;
  -webkit-box-shadow: 0px 7px 10px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 10px -11px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 10px -11px rgba(0, 0, 0, 0.75);
`;

const MainStreamInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const MainStreamRightInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CustomChevronLeftIcon = styled.div`
  font-size: 20px;
  color: white;
  cursor: pointer;
  line-height: 0;
`;

export default StreamBar;
