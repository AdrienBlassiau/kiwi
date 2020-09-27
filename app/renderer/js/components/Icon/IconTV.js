import React from 'react';

const IconTV = (props) =>{

  let color = props.color;

  let iconTV = (color) =>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6666 9.33325H5.33329C3.86053 9.33325 2.66663 10.5272 2.66663 11.9999V26.6666C2.66663 28.1393 3.86053 29.3333 5.33329 29.3333H26.6666C28.1394 29.3333 29.3333 28.1393 29.3333 26.6666V11.9999C29.3333 10.5272 28.1394 9.33325 26.6666 9.33325Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6667 2.66675L16 9.33341L9.33337 2.66675" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;

  return (iconTV(color));
};

export default IconTV;
