import React from 'react';

const IconLoadingDataLittle = (props) =>{

  let color = props.color;

  let iconLoadingDataLittle = (color) =>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.15417 13.3083C10.553 13.3083 13.3083 10.553 13.3083 7.15417C13.3083 3.75532 10.553 1 7.15417 1C3.75531 1 1 3.75532 1 7.15417C1 10.553 3.75531 13.3083 7.15417 13.3083Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.15417 3.46167V7.15417L9.61584 8.385" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ;

  return (iconLoadingDataLittle(color));
};

export default IconLoadingDataLittle;

