import React from 'react';

const IconSearch= (props) =>{

let color = props.color;

let iconSearch = (color) =>
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4583 19.7917C16.0607 19.7917 19.7917 16.0607 19.7917 11.4583C19.7917 6.85596 16.0607 3.125 11.4583 3.125C6.85596 3.125 3.125 6.85596 3.125 11.4583C3.125 16.0607 6.85596 19.7917 11.4583 19.7917Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.875 21.875L17.3438 17.3438" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>


return (iconSearch(color));
};

export default IconSearch;


