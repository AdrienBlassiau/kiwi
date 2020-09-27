import React from 'react';

const IconStopLittle = (props) =>{

  let color = props.color;

  let iconStopLittle = (color) =>
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 1L1 10" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 1L10 10" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ;


  return (iconStopLittle(color));
};

export default IconStopLittle;


