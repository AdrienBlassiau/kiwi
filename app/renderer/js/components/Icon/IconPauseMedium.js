import React from 'react';

const IconPauseMedium = (props) =>{

  let color = props.color;

  let iconPauseMedium = (color) =>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4167 4.16667H6.25V20.8333H10.4167V4.16667Z" fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.75 4.16667H14.5834V20.8333H18.75V4.16667Z" fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ;

  return (iconPauseMedium(color));
};

export default IconPauseMedium;

