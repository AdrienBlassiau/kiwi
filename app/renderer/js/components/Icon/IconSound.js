import React from 'react';
import MovieMainPage from '../Main/CentralMain/MovieMainPage';
import MoviePage from '../Main/CentralMain/MoviePage';

const IconSound = (props) =>{

  let color = props.color;
  let level = props.level;

  let iconSound = (color,level) => {
    let soundIcon;
    switch (level){
      case 0:
        soundIcon =
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57286 1L4.36571 4.36571H1V9.41429H4.36571L8.57286 12.78V1Z" fill={color} stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.67 4.36572L13.6214 9.41429" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.6214 4.36572L18.67 9.41429" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>;
        break;
      case 1:
        soundIcon =
          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 1.05835L4.33333 4.39168H1V9.39168H4.33333L8.5 12.725V1.05835Z" fill={color} stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>;
        break;
      case 2:
        soundIcon =
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 1.05835L4.33333 4.39168H1V9.39168H4.33333L8.5 12.725V1.05835Z" fill={color} stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.2833 3.94165C13.0645 4.72302 13.5033 5.78263 13.5033 6.88748C13.5033 7.99234 13.0645 9.05195 12.2833 9.83332" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        break;
      case 3:
        soundIcon =
          <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 1.05835L4.33333 4.39168H1V9.39168H4.33333L8.5 12.725V1.05835Z" fill={color} stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.225 1C16.7872 2.56273 17.6649 4.68197 17.6649 6.89167C17.6649 9.10137 16.7872 11.2206 15.225 12.7833M12.2833 3.94167C13.0645 4.72303 13.5033 5.78265 13.5033 6.8875C13.5033 7.99235 13.0645 9.05197 12.2833 9.83334" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>;
        break;
      default:
        soundIcon =
          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 1.05835L4.33333 4.39168H1V9.39168H4.33333L8.5 12.725V1.05835Z" fill={color} stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>;
        break;
    }
    return soundIcon;
  }

  return (iconSound(color,level));
};

export default IconSound;

