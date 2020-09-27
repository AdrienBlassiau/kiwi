import React from 'react';

const IconLoadingMedium = (props) =>{

  let color = props.color;

  let iconLoadingMedium = (color) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.615 21.2942C16.9606 21.2942 21.2941 16.9607 21.2941 11.615C21.2941 6.26934 16.9606 1.93583 11.615 1.93583C6.2693 1.93583 1.93579 6.26934 1.93579 11.615C1.93579 16.9607 6.2693 21.2942 11.615 21.2942Z" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.615 5.80749V11.615L15.4867 13.5508" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ;

  return (iconLoadingMedium(color));
};

export default IconLoadingMedium;
