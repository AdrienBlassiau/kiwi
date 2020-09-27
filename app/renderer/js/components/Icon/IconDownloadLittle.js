import React from 'react';

const IconDownloadLittle = (props) =>{

  let color = props.color;

  let iconDownloadLittle = (color) =>
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.75 9.5V12.3333C13.75 12.7091 13.6007 13.0694 13.3351 13.3351C13.0694 13.6007 12.7091 13.75 12.3333 13.75H2.41667C2.04094 13.75 1.68061 13.6007 1.41493 13.3351C1.14926 13.0694 1 12.7091 1 12.3333V9.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.83337 5.95833L7.37504 9.5L10.9167 5.95833" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.375 9.5V1" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconDownloadLittle(color));
};

export default IconDownloadLittle;


