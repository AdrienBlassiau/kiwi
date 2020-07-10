import React, { useState, useEffect, useRef } from 'react';
import ContentManager from './ContentManager';
import ReactDOM from 'react-dom';

const MainContainer = (props) => {
  const myRef = useRef(null);

  return (
    <div ref={myRef} className="main-container">
      <ContentManager myRef={myRef} getters={props.getters} setters={props.setters} />
    </div>
  );
};

export default MainContainer;
