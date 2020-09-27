import React, { useState } from 'react';
import styled from 'styled-components';

const MenuSubLine = (props) =>{
  let text = props.text;

  const [mouseOver, setMouseOver] = useState(false);

  let preparedComponent =
    <MenuSubLineStyle
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      mouseOver={mouseOver}
    >
      <MenuSubLineIconStyle>
      </MenuSubLineIconStyle>
      <MenuSubLineTextStyle mouseOver={mouseOver}>
        {text}
      </MenuSubLineTextStyle>
    </MenuSubLineStyle>;

  return (preparedComponent)
};

const MenuSubLineStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 0;
  width: 100%;
  border-left: 5px solid ${props => props.mouseOver ? "var(--color-accent)" : "transparent"};
  padding-left: 10px;
  margin: 15px 0;
  cursor: pointer;
`;

const MenuSubLineTextStyle = styled.div`
   font-size: 12px;
   padding-left: 10px;
   color: ${props => props.mouseOver ? "var(--color-accent)":"var(--text-intermediate)"};
`;


const MenuSubLineIconStyle = styled.div`
  width: 40px;
`;


export default MenuSubLine;
