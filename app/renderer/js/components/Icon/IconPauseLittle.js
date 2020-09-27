import React from 'react';

const IconPauseLittle = (props) =>{

  let color = props.color;

  let iconPauseLittle = (color) =>
    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 1H1V13H4V1Z" fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 1H7V13H10V1Z" fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ;

  return (iconPauseLittle(color));
};

export default IconPauseLittle;

