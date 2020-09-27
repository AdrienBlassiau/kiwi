import React, { useState } from 'react';

const IconRating = (props) =>{

  let color1 = props.color1;
  let color2 = props.color2;
  let globalRating = props.globalRating;
  let setUserRating = props.setUserRating;
  let userRating = props.userRating;
  let setCurrentRating = props.setCurrentRating;
  let currentRating = props.currentRating;
  let setShowRating = props.setShowRating;
  let showRating = props.currentRating;

  let colorLine = Array.from({length: 20}, (_, i) => Math.round((i + 1)/2)).map( (rating, key) => {
    return (
      <line
        onMouseEnter={()=>{setShowRating(true);setCurrentRating(rating)}}
        onMouseLeave={()=>{setCurrentRating(userRating)}}
        onClick={()=>{setUserRating(currentRating)}}
        key={key}
        x1={0.5+key}
        y1="0"
        x2={0.5+key}
        y2="10"
        stroke={key%2 === 0 ? (showRating ? (currentRating>=rating ? color1 : color2):
          (userRating ? (userRating>=rating ? color1 : color2):
            (globalRating>=rating ? color1 : color2))):"transparent"}/>);
  });

  let iconRating = () =>{
    return (
      <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {colorLine}
      </svg>);
  };

  return (iconRating());
};

export default IconRating;





