import React from 'react';
import styled from 'styled-components';
const path = require('path');

const TitleBar = () =>{

  let preparedComponent =
      <TitleBarStyle>
        <TitleBarImage >
          <TitleBarImageContent src={path.resolve(path.join(__dirname, '../../../../../images/logo_6.png'))}  alt={"logo"}/>
        </TitleBarImage>
        <TitleBarBrand >
          KIWI
        </TitleBarBrand>
      </TitleBarStyle>;

  return (preparedComponent)
};

const TitleBarStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  font-size: 30px;
  font-weight: 600;
  padding-top: 10px;
  padding-left: 10px;
`;

const TitleBarImage= styled.div`
  height: 30px;
  padding-right: 10px;
`;

const TitleBarImageContent= styled.img`
  height: 30px;
`;

const TitleBarBrand= styled.div`
  font-weight: 900;
  letter-spacing: -1px;
`;



export default TitleBar;
