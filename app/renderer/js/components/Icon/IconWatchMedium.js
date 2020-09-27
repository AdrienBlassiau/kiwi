import React from 'react';

const IconWatchMedium = (props) =>{

  let add = props.add;

  let color = add ?
    {color1:"var(--color-accent)",
      color2:"var(--color-accent)",
      color3:"var(--background-primary)"}:
    {color1:"var(--background-primary)",
      color2:"var(--text-primary)",
      color3:"var(--text-primary)"};

  let iconWatchMedium = (color) =>
    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7.33333C1 7.33333 4.16667 1 9.70833 1C15.25 1 18.4167 7.33333 18.4167 7.33333C18.4167 7.33333 15.25 13.6667 9.70833 13.6667C4.16667 13.6667 1 7.33333 1 7.33333Z" fill={color.color1} stroke={color.color2}  strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.70837 9.70833C11.0201 9.70833 12.0834 8.645 12.0834 7.33333C12.0834 6.02165 11.0201 4.95833 9.70837 4.95833C8.3967 4.95833 7.33337 6.02165 7.33337 7.33333C7.33337 8.645 8.3967 9.70833 9.70837 9.70833Z" fill={color.color1} stroke={color.color3}  strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconWatchMedium(color));
};

export default IconWatchMedium;



