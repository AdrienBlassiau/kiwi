import React from 'react';

const IconLoadingLinkMedium = (props) =>{

  let color = props.color;

  let iconLoadingLinkMedium = (color) =>
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4166 1V5.16667" stroke={color} strokeOpacity="0.3" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.4166 17.6667V21.8333" stroke={color} strokeOpacity="0.3" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.052 4.05208L6.99992 7" stroke={color} strokeOpacity="0.3" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.8333 15.8333L18.7812 18.7813" stroke={color} strokeOpacity="0.3" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 11.4167H5.16667" stroke={color} strokeOpacity="0.3" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.6666 11.4167H21.8333" stroke={color} strokeOpacity="0.3" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.052 18.7813L6.99992 15.8333" stroke={color} strokeOpacity="0.3" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.8333 7L18.7812 4.05208" stroke={color} strokeOpacity="0.3" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconLoadingLinkMedium(color));
};

export default IconLoadingLinkMedium;


