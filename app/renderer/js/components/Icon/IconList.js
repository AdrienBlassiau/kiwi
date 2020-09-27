import React from 'react';

const IconList = (props) =>{

  let color = props.color;

  let iconList = (color) =>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6666 8H28" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6666 16H28" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6666 24H28" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 8H4.01333" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 16H4.01333" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 24H4.01333" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconList(color));
};

export default IconList;
