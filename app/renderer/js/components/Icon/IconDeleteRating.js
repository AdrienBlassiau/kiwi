import React from 'react';

const IconDeleteRating = (props) =>{

  let color = props.color;

  let iconDeleteRating = (color) =>
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 1L1 7" stroke="#52525D" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 1L7 7" stroke="#52525D" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;

  return (iconDeleteRating(color));
};

export default IconDeleteRating;



