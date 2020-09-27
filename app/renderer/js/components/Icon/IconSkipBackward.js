import React from 'react';

const IconSkipBackward = (props) =>{

  let color = props.color;

  let iconSkipBackward = (color) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 20L9 12L19 4V20Z" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 19V5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconSkipBackward(color));
};

export default IconSkipBackward;
