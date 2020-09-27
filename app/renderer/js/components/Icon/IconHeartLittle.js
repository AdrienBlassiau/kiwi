import React from 'react';

const IconHeartLittle = (props) =>{

  let add = props.add;

  let color = add ?
    {color1:"var(--color-accent)",
      color2:"var(--color-accent)"}:
    {color1:"var(--background-primary)",
      color2:"var(--text-intermediate)"};

  let iconHeartLittle = (color) =>
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.0679 1.88407C10.8013 1.6038 10.4849 1.38146 10.1365 1.22977C9.78817 1.07808 9.41481 1 9.03775 1C8.6607 1 8.28733 1.07808 7.93899 1.22977C7.59065 1.38146 7.27417 1.6038 7.00761 1.88407L6.45441 2.46547L5.9012 1.88407C5.36278 1.3182 4.63251 1.00029 3.87106 1.00029C3.10961 1.00029 2.37934 1.3182 1.84091 1.88407C1.30249 2.44995 1 3.21744 1 4.0177C1 4.81797 1.30249 5.58546 1.84091 6.15134L2.39412 6.73274L6.45441 11L10.5147 6.73274L11.0679 6.15134C11.3346 5.87119 11.5461 5.53857 11.6905 5.17247C11.8348 4.80638 11.9091 4.41398 11.9091 4.0177C11.9091 3.62143 11.8348 3.22903 11.6905 2.86293C11.5461 2.49684 11.3346 2.16422 11.0679 1.88407V1.88407Z" fill={color.color1} stroke={color.color2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;


  return (iconHeartLittle(color));
};

export default IconHeartLittle;



