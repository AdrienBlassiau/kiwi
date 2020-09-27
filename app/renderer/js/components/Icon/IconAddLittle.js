import React from 'react';

const IconAddLittle = (props) =>{

  let add = props.add;
  let color = add ? "var(--text-intermediate)" : "var(--text-intermediate)";

  let iconAddLittle = (color) =>
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.41492 1V11.83" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 6.41499H11.83" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconAddLittle(color));
};

export default IconAddLittle;


