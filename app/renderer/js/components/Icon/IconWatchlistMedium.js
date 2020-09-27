import React from 'react';

const IconWatchlistMedium = (props) =>{

  let add = props.add;

  let color = add ?
    {color1:"var(--background-primary)",
      color2:"var(--color-accent)",
      color3:"var(--text-primary)",
      color4:"var(--background-primary)",
      color5:"var(--color-accent)",
      color6:"var(--text-primary)"} :
    {color1:"var(--background-primary)",
      color2:"var(--background-primary)",
      color3:"var(--text-primary)",
      color4:"var(--text-primary)",
      color5:"var(--text-primary)",
      color6:"var(--background-primary)"};

  let iconAddWatchlistMedium = () =>
    <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6154 19.4615C15.501 19.4615 19.4616 15.501 19.4616 10.6154C19.4616 5.72978 15.501 1.76923 10.6154 1.76923C5.72985 1.76923 1.76929 5.72978 1.76929 10.6154C1.76929 15.501 5.72985 19.4615 10.6154 19.4615Z" fill={color.color2} stroke={color.color5} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6154 5.30769V10.6154L14.1538 12.3846" stroke={color.color4} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.3462 21.2308C22.789 21.2308 24.7693 19.2505 24.7693 16.8077C24.7693 14.3649 22.789 12.3847 20.3462 12.3847C17.9034 12.3847 15.9231 14.3649 15.9231 16.8077C15.9231 19.2505 17.9034 21.2308 20.3462 21.2308Z" fill={color.color3} stroke={color.color3} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.3461 15.0385V18.577" stroke={color.color6} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.5769 16.8077H22.1154" stroke={color.color1} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;

  return (iconAddWatchlistMedium());
};

export default IconWatchlistMedium;



