import React from 'react';

const IconChevronSeeAfter = (props) =>{

  let color = props.color;
  let opacity = props.opacity;

  let iconChevronSeeBefore = (color,opacity) =>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 24L20 16L12 8" stroke={color} strokeOpacity={opacity} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;

  return (iconChevronSeeBefore(color,opacity));
};

export default IconChevronSeeAfter;



