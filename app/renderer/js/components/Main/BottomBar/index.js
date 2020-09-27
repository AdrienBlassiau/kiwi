import React from 'react';
import styled from 'styled-components';
import BottomNavigationSection from './NavigationSection/index.js';
import MediaProgressBar from './MediaProgressBar/index.js';
import LinksSection from './LinksSection/index.js';
import OptionsSection from './OptionsSection/index.js';

const BottomBar = () =>{

  let preparedComponent =
    <BottomBarContainerStyle>
      <BottomBarStyle>
        <BottomNavigationSection />
        <MediaProgressBar />
        <OptionsSection />
        <LinksSection />
      </BottomBarStyle>
    </BottomBarContainerStyle>;

  return (preparedComponent)
};

const BottomBarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const BottomBarContainerStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--bottom-bar-height);
  background-color: var(--background-primary);
  border-top: 1px solid var(--divider-primary);
  z-index: 40;
`;

export default BottomBar;
