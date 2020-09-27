import React, { useEffect, useRef, useState } from 'react';

const ReactDOM = require('react-dom');

const onClickManager = (ref) =>{

  const [click, setClick] = useState(null);
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    if (click && ref){
      const domNode = ReactDOM.findDOMNode(ref.current);
      if(domNode.contains(click.target)){
        setIsInside(true);
      }
      else{
        setIsInside(false);
      }
    }
  }, [click]);

  const handleClick = (e) => {
    setClick(e);
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);


  return isInside;
};


export default onClickManager;
