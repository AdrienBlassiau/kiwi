import React from 'react';

const IconBackLittle = (props) =>{

  let add = props.add;
  let color = add ? "var(--text-intermediate)" : "var(--text-intermediate)";

  let iconBackLittle = (color) =>
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.99999 9.00005L0.999992 5.00005L4.99999 1.00005" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ;


  return (iconBackLittle(color));
};

export default IconBackLittle;
