import React from 'react';

const colorText = (start,current,end,text,color1,color2) => {
  let percentageColoration = (current-start)/(end-start);
  let arrayOfText = Array.from(text);
  let arrayOfTextLength = arrayOfText.length;
  let percentageColored = arrayOfTextLength*percentageColoration;

  return arrayOfText.map((data, index) => {
    let color = index <= percentageColored ? color1 : color2;
    return ({ char: data, color: color });
  });
}

const generateColoredString = (start,current,end,text,color1,color2) => {
  let arrayOfColoredText = colorText(start,current,end,text,color1,color2);
  return (arrayOfColoredText.map((data,key) => {
    return(<span key={key} style={{color:data.color}}>{data.char}</span>)
  }));
}

module.exports = {
  generateColoredString
};
