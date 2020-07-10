import React, { Component } from 'react';

const remote = require('electron').remote;

const minimize = () => {
  var window = remote.getCurrentWindow();
  window.minimize();
};

const maximize = () => {
  var window = remote.getCurrentWindow();
  if (!window.isMaximized()) {
    window.maximize();
  } else {
    window.unmaximize();
  }
};

const closeWindow = () => {
  var window = remote.getCurrentWindow();
  window.close();
};

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
          <div onClick={minimize} className="custom-icon-bar opacity-c icon-minimize"></div>
          <div onClick={maximize} className="custom-icon-bar opacity-c icon-maximize"></div>
          <div onClick={close} className="custom-icon-bar red-close">
            <div className="line-x">✕</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTopBar;
