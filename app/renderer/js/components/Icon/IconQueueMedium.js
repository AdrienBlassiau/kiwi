import React from 'react';

const IconQueueMedium = (props) =>{

  let color = props.color;

  let iconQueueMedium = (color) =>
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 1.08334L1.08337 6.29168L11.5 11.5L21.9167 6.29168L11.5 1.08334Z" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.08337 16.7083L11.5 21.9167L21.9167 16.7083" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.08337 11.5L11.5 16.7083L21.9167 11.5" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconQueueMedium(color));
};

export default IconQueueMedium;


