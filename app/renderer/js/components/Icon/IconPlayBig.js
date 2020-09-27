import React from 'react';

const IconPlayBig = (props) =>{

  let color = props.color;

  let iconPlayBig = (color) =>
    <svg width="26" height="33" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L25.3572 16.5L1 32V1Z" fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;

  return (iconPlayBig(color));
};

export default IconPlayBig;





