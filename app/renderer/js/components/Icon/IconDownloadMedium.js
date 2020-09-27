import React from 'react';

const IconDownloadMedium = (props) =>{

  let color = props.color;

  let iconDownloadMedium = (color) =>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.875 15.625V19.7917C21.875 20.3442 21.6555 20.8741 21.2648 21.2648C20.8741 21.6555 20.3442 21.875 19.7917 21.875H5.20833C4.6558 21.875 4.12589 21.6555 3.73519 21.2648C3.34449 20.8741 3.125 20.3442 3.125 19.7917V15.625" stroke={color} strokeOpacity="0.3" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.29163 10.4167L12.5 15.625L17.7083 10.4167" stroke={color} strokeOpacity="0.3" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5 15.625V3.125" stroke={color} strokeOpacity="0.3" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconDownloadMedium(color));
};

export default IconDownloadMedium;
