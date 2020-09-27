import React from 'react';

const IconLoadingLinkLittle = (props) =>{

  let color = props.color;

  let iconLoadingLinkLittle = (color) =>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.08337 1V3.83333" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.08337 12.3333V15.1667" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.07544 3.07542L5.08002 5.08001" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.0867 11.0867L13.0913 13.0913" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 8.08333H3.83333" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.3334 8.08333H15.1667" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.07544 13.0913L5.08002 11.0867" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.0867 5.08001L13.0913 3.07542" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconLoadingLinkLittle(color));
};

export default IconLoadingLinkLittle;
