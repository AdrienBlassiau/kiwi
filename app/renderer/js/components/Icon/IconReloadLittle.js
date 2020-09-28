import React from 'react';

const IconReloadLittle = (props) =>{

  let color = props.color;

  let iconReloadLittle = (color) =>
    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4583 1.16675V4.41675H9.20825" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.541748 9.83326V6.58325H3.79175" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.90133 3.87494C2.17605 3.09861 2.64294 2.40453 3.25846 1.85746C3.87397 1.31038 4.61804 0.928145 5.42124 0.746412C6.22443 0.564679 7.06057 0.589374 7.85164 0.818192C8.64271 1.04701 9.36293 1.47249 9.94508 2.05494L12.4584 4.41661M0.541748 6.58327L3.05508 8.94494C3.63724 9.52739 4.35745 9.95287 5.14852 10.1817C5.93959 10.4105 6.77573 10.4352 7.57893 10.2535C8.38212 10.0717 9.12619 9.68949 9.7417 9.14242C10.3572 8.59534 10.8241 7.90126 11.0988 7.12494" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconReloadLittle(color));
};

export default IconReloadLittle;
