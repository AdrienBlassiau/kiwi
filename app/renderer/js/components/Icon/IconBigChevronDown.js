import React from 'react';

const IconBigChevronDown = (props) =>{

let color = props.color;

let iconBigChevronDown = (color) =>
  <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.25 1.375L13.5 13.625L25.75 1.375" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;


return (iconBigChevronDown(color));
};

export default IconBigChevronDown;





