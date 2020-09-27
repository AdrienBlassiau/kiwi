import React from 'react';
import styled from 'styled-components';
import TitleBar from './TitleBar/index.js';
import LetterboxdBox from './LetterboxdBox/index.js';
import Menu from './Menu/index.js';

const LeftBar = () =>{

  let preparedComponent =
    <LeftBarStyle>
      <LeftBarContainerStyle>
        <TitleBar/>
        <LetterboxdBox/>
        <Menu/>
      </LeftBarContainerStyle>
    </LeftBarStyle>;

  return (preparedComponent)
};

const LeftBarContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`;

const LeftBarStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--left-bar-width);
  background-color: var(--background-primary);
  border-right: 1px solid var(--divider-primary);
  display: flex;
  flex-direction: column;
  z-index: 30;
`;

export default LeftBar;
