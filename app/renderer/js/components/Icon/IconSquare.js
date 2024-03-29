import React from 'react';

const IconSquare = (props) =>{

  let color = props.color;

  let iconSquare = (color) =>
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.16667 1H2.66667C2.22464 1 1.80072 1.17559 1.48816 1.48816C1.17559 1.80072 1 2.22464 1 2.66667V5.16667M16 5.16667V2.66667C16 2.22464 15.8244 1.80072 15.5118 1.48816C15.1993 1.17559 14.7754 1 14.3333 1H11.8333M11.8333 16H14.3333C14.7754 16 15.1993 15.8244 15.5118 15.5118C15.8244 15.1993 16 14.7754 16 14.3333V11.8333M1 11.8333V14.3333C1 14.7754 1.17559 15.1993 1.48816 15.5118C1.80072 15.8244 2.22464 16 2.66667 16H5.16667" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconSquare(color));
};

export default IconSquare;
