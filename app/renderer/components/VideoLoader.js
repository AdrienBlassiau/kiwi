import React, { useState, useEffect } from 'react';
import { getJokes } from '../controllers';

const VideoLoader = (props) => {
  const [jokes, setJokes] = useState(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const jokes = getJokes(setJokes);
  //     setJokes(jokes);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="loading-container">
      <div>{props.message}</div>
      <div>{jokes}</div>
    </div>
  );
};

export default VideoLoader;
