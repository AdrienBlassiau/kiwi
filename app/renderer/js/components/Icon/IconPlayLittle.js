import React from 'react';

const IconPlayLittle = (props) =>{

  let color = props.color;

  let iconPlayLittle = (color) =>
    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L10.9048 7.5L1 14V1Z" fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;

  return (iconPlayLittle(color));
};

export default IconPlayLittle;


