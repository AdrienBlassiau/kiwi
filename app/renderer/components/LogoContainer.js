import React, { useState, useEffect } from 'react';
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
      <div className="name-container">
            <span className="logo-container-letter">K</span>iwi
          </div>
          <div className="logo-container">
            <img  src="./images/logo_2.png" />
          </div>
    </div>
  );
};

export default LogoContainer;
