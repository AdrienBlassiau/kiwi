import React, { useState } from 'react';
import styled from 'styled-components';

const MenuLine = (props) =>{
  let text = props.text;
  let Icon = props.Icon;

  const [mouseOver, setMouseOver] = useState(false);

  const color = mouseOver ? "var(--color-accent)":"var(--text-primary)";

  let preparedComponent =
    <MenuLineStyle
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      mouseOver={mouseOver}
    >
      <MenuLineIconStyle>
        <Icon color={color}/>
      </MenuLineIconStyle>
      <MenuLineTextStyle mouseOver={mouseOver}>
        {text}
      </MenuLineTextStyle>
    </MenuLineStyle>;

  return (preparedComponent)
};

const MenuLineStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 0;
  width: 100%;
  border-left: 5px solid ${props => props.mouseOver ? "var(--color-accent)" : "transparent"};
  padding-left: 10px;
  margin: 10px 0;
  cursor: pointer;
`;

const MenuLineTextStyle = styled.div`
   font-weight: bold;
   font-size: 18px;
   padding-left: 10px;
   color: ${props => props.mouseOver ? "var(--color-accent)":"inherit"};
`;


const MenuLineIconStyle = styled.div`
  width: 40px;
`;


export default MenuLine;
