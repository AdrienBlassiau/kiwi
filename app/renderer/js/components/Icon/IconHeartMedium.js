import React from 'react';

const IconHeartMedium= (props) =>{

  let add = props.add;

  let color = add ?
    {color1:"var(--color-accent)",
      color2:"var(--color-accent)"}:
    {color1:"var(--background-primary)",
      color2:"var(--text-primary)"};

  let iconHeartMedium= (color) =>
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.0815 2.06089C12.7616 1.72455 12.3818 1.45775 11.9638 1.27572C11.5458 1.09369 11.0978 1 10.6453 1C10.1928 1 9.7448 1.09369 9.32679 1.27572C8.90878 1.45775 8.529 1.72455 8.20913 2.06089L7.54529 2.75857L6.88144 2.06089C6.23533 1.38184 5.35901 1.00035 4.44527 1.00035C3.53153 1.00035 2.65521 1.38184 2.0091 2.06089C1.36298 2.73994 1 3.66092 1 4.62124C1 5.58157 1.36298 6.50255 2.0091 7.1816L2.67294 7.87928L7.54529 13L12.4176 7.87928L13.0815 7.1816C13.4015 6.84543 13.6554 6.44628 13.8286 6.00697C14.0018 5.56765 14.0909 5.09678 14.0909 4.62124C14.0909 4.14571 14.0018 3.67484 13.8286 3.23552C13.6554 2.79621 13.4015 2.39706 13.0815 2.06089V2.06089Z" fill={color.color1} stroke={color.color2} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconHeartMedium(color));
};

export default IconHeartMedium;
