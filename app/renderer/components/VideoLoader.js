import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { getJokes } from '../controllers';

const VideoLoader = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const [jokes, setJokes] = useState(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const jokes = getJokes(setJokes);
  //     setJokes(jokes);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////  COMPONENTS  ////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <LoadingContainer>
      <div>{props.message}</div>
      <div>{jokes}</div>
    </LoadingContainer>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
`;

export default VideoLoader;
