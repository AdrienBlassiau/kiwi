import React from 'react';

const IconSkipForward = (props) =>{

  let color = props.color;

  let iconSkipForward = (color) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4L15 12L5 20V4Z" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 5V19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconSkipForward(color));
};

export default IconSkipForward;
