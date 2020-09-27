import React from 'react';

const IconQueueLittle = (props) =>{

  let color = props.color;

  let iconQueueLittle = (color) =>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.08333 1L1 4.54167L8.08333 8.08333L15.1667 4.54167L8.08333 1Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 11.625L8.08333 15.1667L15.1667 11.625" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 8.08333L8.08333 11.625L15.1667 8.08333" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconQueueLittle(color));
};

export default IconQueueLittle;


