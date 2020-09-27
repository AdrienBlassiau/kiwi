import React from 'react';

const IconGrid = (props) =>{

  let color = props.color;

  let iconGrid = (color) =>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3333 4H4V13.3333H13.3333V4Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 4H18.6666V13.3333H28V4Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 18.6667H18.6666V28.0001H28V18.6667Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 18.6667H4V28.0001H13.3333V18.6667Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>


  return (iconGrid(color));
};

export default IconGrid;
