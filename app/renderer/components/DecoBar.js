import React, { useState, useEffect } from 'react';
import LogoContainer from './LogoContainer';

const DecoBar = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const colorStyle = {
    background:
      'linear-gradient(150deg, rgba(240,161,0,0.85) 0%, rgba(184,53,106,0.85) 25%, rgba(91,43,137,0.85) 50%, rgba(46,85,206,0.85) 75%, rgba(68,188,103,0.85) 100%), url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/d7JUXVvjvVCXWs1mlpyO5ESdWdT.jpg',
  };

  return (
    <React.Fragment>
      <div className="main-deco-container" style={colorStyle}></div>
      <LogoContainer />
    </React.Fragment>
  );
};

export default DecoBar;
