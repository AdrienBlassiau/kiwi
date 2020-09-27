import React from 'react';

const IconChevronSeeAfter = (props) =>{

  let color = props.color;

  let iconChevronSeeAfter = (color) =>
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.875 15.75L13.125 10.5L7.875 5.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;

  return (iconChevronSeeAfter(color));
};

export default IconChevronSeeAfter;
