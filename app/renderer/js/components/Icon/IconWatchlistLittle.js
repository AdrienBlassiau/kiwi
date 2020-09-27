import React from 'react';

const IconWatchlistLittle = (props) =>{

  let add = props.add;

  let color = add ?
    {color1:"var(--background-primary)",
      color2:"var(--color-accent)",
      color3:"var(--text-intermediate)",
      color4:"var(--background-primary)",
      color5:"var(--color-accent)",
      color6:"var(--text-intermediate)"} :
    {color1:"var(--background-primary)",
      color2:"var(--background-primary)",
      color3:"var(--text-intermediate)",
      color4:"var(--text-intermediate)",
      color5:"var(--text-intermediate)",
      color6:"var(--background-primary)"};

  let iconAddWatchlistLittle = () =>
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M7.38456 13.5385C10.7832 13.5385 13.5384 10.7833 13.5384 7.38462C13.5384 3.98595 10.7832 1.23077 7.38456 1.23077C3.98588 1.23077 1.23071 3.98595 1.23071 7.38462C1.23071 10.7833 3.98588 13.5385 7.38456 13.5385Z" fill={color.color2} stroke={color.color5} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.38464 3.69231V7.38461L9.84618 8.61538" stroke={color.color4}  strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <path d="M14.1538 14.7692C15.8532 14.7692 17.2308 13.3916 17.2308 11.6923C17.2308 9.99296 15.8532 8.61537 14.1538 8.61537C12.4545 8.61537 11.0769 9.99296 11.0769 11.6923C11.0769 13.3916 12.4545 14.7692 14.1538 14.7692Z" fill={color.color3} stroke={color.color3} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1539 10.4615V12.9231" stroke={color.color6} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.9231 11.6923H15.3846" stroke={color.color1} strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <clipPath id="clip0">
          <rect width="14.7692" height="14.7692" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ;


  return (iconAddWatchlistLittle());
};

export default IconWatchlistLittle;



