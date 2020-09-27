import React from 'react';

const IconMicro = (props) =>{

  let color = props.color ;

  let iconMicro = (color) =>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0.75C8.40326 0.75 7.83097 0.987053 7.40901 1.40901C6.98705 1.83097 6.75 2.40326 6.75 3V9C6.75 9.59674 6.98705 10.169 7.40901 10.591C7.83097 11.0129 8.40326 11.25 9 11.25C9.59674 11.25 10.169 11.0129 10.591 10.591C11.0129 10.169 11.25 9.59674 11.25 9V3C11.25 2.40326 11.0129 1.83097 10.591 1.40901C10.169 0.987053 9.59674 0.75 9 0.75V0.75Z" fill={color} stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.25 7.5V9C14.25 10.3924 13.6969 11.7277 12.7123 12.7123C11.7277 13.6969 10.3924 14.25 9 14.25C7.60761 14.25 6.27226 13.6969 5.28769 12.7123C4.30312 11.7277 3.75 10.3924 3.75 9V7.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 14.25V17.25" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 17.25H12" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ;

  return (iconMicro(color));
};

export default IconMicro;


