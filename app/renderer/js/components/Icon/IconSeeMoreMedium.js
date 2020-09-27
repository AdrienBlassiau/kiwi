import React from 'react';

const IconSeeMoreMedium = (props) =>{

  let color = props.color;

  let iconSeeMoreMedium = (color) =>
    <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.62625 2.2525C8.97212 2.2525 9.2525 1.97212 9.2525 1.62625C9.2525 1.28038 8.97212 1 8.62625 1C8.28038 1 8 1.28038 8 1.62625C8 1.97212 8.28038 2.2525 8.62625 2.2525Z" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.6263 2.2525C15.9721 2.2525 16.2525 1.97212 16.2525 1.62625C16.2525 1.28038 15.9721 1 15.6263 1C15.2804 1 15 1.28038 15 1.62625C15 1.97212 15.2804 2.2525 15.6263 2.2525Z" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.62625 2.2525C1.97212 2.2525 2.2525 1.97212 2.2525 1.62625C2.2525 1.28038 1.97212 1 1.62625 1C1.28038 1 1 1.28038 1 1.62625C1 1.97212 1.28038 2.2525 1.62625 2.2525Z" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconSeeMoreMedium(color));
};

export default IconSeeMoreMedium;


