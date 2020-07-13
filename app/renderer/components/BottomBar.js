import React, { useState, useEffect } from 'react';

import axios from 'axios';

const BottomBar = (props) => {

  return (
    <div className="main-bottom-container">
      <div className="main-bottom-data">
        <div className="site-name">Kiwi</div>
        <div className="site-name">BETA</div>
      </div>
    </div>
  );
};

export default BottomBar;
