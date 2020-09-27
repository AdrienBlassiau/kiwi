import React from 'react';

const IconChevronDown = (props) =>{

  let color = props.color;

  let iconChevronDown = (color) =>
    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L4.5 4.5L8 1" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ;

  return (iconChevronDown(color));
};

export default IconChevronDown;


