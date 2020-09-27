import React from 'react';

const IconChevronSeeBefore= (props) =>{

  let color = props.color;
  let opacity = props.opacity;

  let iconChevronSeeAfter = (color,opacity) =>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 24L12 16L20 8" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;

  return (iconChevronSeeAfter(color,opacity));
};

export default IconChevronSeeBefore;
