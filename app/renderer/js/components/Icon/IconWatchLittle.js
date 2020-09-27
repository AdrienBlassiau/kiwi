import React from 'react';

const IconWatchLittle = (props) =>{

  let add = props.add;

  let color = add ?
    {color1:"var(--color-accent)",
      color2:"var(--color-accent)",
      color3:"var(--background-primary)"}:
    {color1:"var(--background-primary)",
      color2:"var(--text-intermediate)",
      color3:"var(--text-intermediate)"};

  let iconWatchLittle = (color) =>
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5.66667C1 5.66667 3.33333 1 7.41667 1C11.5 1 13.8333 5.66667 13.8333 5.66667C13.8333 5.66667 11.5 10.3333 7.41667 10.3333C3.33333 10.3333 1 5.66667 1 5.66667Z" fill={color.color1} stroke={color.color2} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.41663 7.41666C8.38312 7.41666 9.16663 6.63315 9.16663 5.66666C9.16663 4.70016 8.38312 3.91666 7.41663 3.91666C6.45013 3.91666 5.66663 4.70016 5.66663 5.66666C5.66663 6.63315 6.45013 7.41666 7.41663 7.41666Z" fill={color.color1} stroke={color.color3} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconWatchLittle(color));
};

export default IconWatchLittle;
