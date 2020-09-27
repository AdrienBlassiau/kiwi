import React from 'react';

const IconFilm = (props) =>{

    let color = props.color;

    let iconFilm = (color) =>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.4266 2.66675H5.57329C3.96798 2.66675 2.66663 3.96811 2.66663 5.57341V26.4267C2.66663 28.0321 3.96798 29.3334 5.57329 29.3334H26.4266C28.0319 29.3334 29.3333 28.0321 29.3333 26.4267V5.57341C29.3333 3.96811 28.0319 2.66675 26.4266 2.66675Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.33337 2.66675V29.3334" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.6667 2.66675V29.3334" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.66663 16H29.3333" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.66663 9.33325H9.33329" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.66663 22.6667H9.33329" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.6667 22.6667H29.3334" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.6667 9.33325H29.3334" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>;

    return (iconFilm(color));
};

export default IconFilm;
