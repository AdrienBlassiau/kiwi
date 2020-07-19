import React, { Component } from 'react';

import Crop169RoundedIcon from '@material-ui/icons/Crop169Rounded';
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

const MainTopBar = () => {
  return (
    <div className="main-top-bar-container">
      <div className="main-top-bar">
        <div className="tob-bar-features">
          <div className="">Kiwi</div>
          <div className="custom-feature-list">
            <div className="custom-feature">App</div>
            <div className="custom-feature">Theme</div>
            <div className="custom-feature">Help</div>
          </div>
        </div>
        <div className="tob-bar-action">
          <div onClick={handleMinimize} className="custom-icon-bar opacity-c">
            <RemoveIcon />
          </div>
          <div onClick={handleMaximize} className="custom-icon-bar opacity-c">
            <AddIcon />
          </div>
          <div onClick={handleClose} className="custom-icon-bar opacity-c">
            <CloseRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTopBar;
