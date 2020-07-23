import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import LogoContainer from './LogoContainer';

const DecoBar = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <React.Fragment>
      <MainDecoContainer />
      <LogoContainer />
    </React.Fragment>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const MainDecoContainer = styled.div`
  // background: rgb(184,53,106);
  // background: linear-gradient(150deg, rgba(240,161,0,1) 0%, rgba(184,53,106,1) 25%, rgba(91,43,137,1) 50%, rgba(46,85,206,1) 75%, rgba(68,188,103,1) 100%);
  // background: linear-gradient(150deg, rgba(240,161,0,0.85) 0%, rgba(184,53,106,0.85) 25%, rgba(91,43,137,0.85) 50%, rgba(46,85,206,0.85) 75%, rgba(68,188,103,0.85) 100%), url(../img/bg.jpg);
  background: linear-gradient(
      150deg,
      rgba(240, 161, 0, 0.85) 0%,
      rgba(184, 53, 106, 0.85) 25%,
      rgba(91, 43, 137, 0.85) 50%,
      rgba(46, 85, 206, 0.85) 75%,
      rgba(68, 188, 103, 0.85) 100%
    ),
    url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/d7JUXVvjvVCXWs1mlpyO5ESdWdT.jpg);
  -webkit-background-size: cover;
  background-size: cover;
  overflow: auto;
  position: relative;
  height: 120px;
  top: 0px;
  padding-top: 32px;
  padding-bottom: 60px;
  clip-path: polygon(0 0, 0 60%, 100% 100%, 100% 0);
  width: 100%;
  margin-bottom: 75px;
`;

export default DecoBar;
