import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const TopBar = () =>{

  let preparedComponent =
    <TopBarStyle>
      <TopBarContainerStyle>
        <SearchBar/>
      </TopBarContainerStyle>
    </TopBarStyle>;

  return (preparedComponent)
};

const TopBarContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  position: absolute;
  left: var(--left-bar-width);
`;


const TopBarStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: var(--top-bar-height);
  background-color: var(--background-primary);
  border-bottom: 1px solid var(--divider-primary);
  z-index: 20;
`;

export default TopBar;
