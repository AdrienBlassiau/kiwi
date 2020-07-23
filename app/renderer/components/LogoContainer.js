import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import ReactDOM from 'react-dom';

import CardManager from './CardManager';
import PlayerContainer from './PlayerContainer';
import ContentDisplay from './ContentDisplay';
import Modal from './Modal';
import SelectionBar from './SelectionBar';

const LogoContainer = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <NameContainer>
        <LogoContainerLetter>K</LogoContainerLetter>iwi
      </NameContainer>
      <LogoContainerStyle>
        <img src="./images/logo_5.png" />
      </LogoContainerStyle>
    </div>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const NameContainer = styled.div`
  position: absolute;
  top: 70px;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  font-weight: 100;
`;

const LogoContainerStyle = styled.div`
  position: absolute;
  top: 210px;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  font-weight: 100;
`;

const LogoContainerLetter = styled.span`
  font-weight: bold;
`;

export default LogoContainer;
