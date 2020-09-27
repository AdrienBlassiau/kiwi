import React from 'react';

const IconPIP = (props) =>{

  let color = props.color;

  let iconPIP = (color) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.3333 3H4.66667C3.74619 3 3 3.74619 3 4.66667V16.3333C3 17.2538 3.74619 18 4.66667 18H16.3333C17.2538 18 18 17.2538 18 16.3333V4.66667C18 3.74619 17.2538 3 16.3333 3Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;

  return (iconPIP(color));
};

export default IconPIP;





