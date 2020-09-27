import React from 'react';

const IconPlayMedium = (props) =>{

  let color = props.color;

  let iconPlayMedium = (color) =>
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L14.7143 10L1 19V1Z" fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconPlayMedium(color));
};

export default IconPlayMedium;
