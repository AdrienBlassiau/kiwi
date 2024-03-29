import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const SwitchContent = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const [selectedTab, setSelectedTab] = useState(1);
  const setMode = props.setMode;

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////  HANDLING EVENTS  /////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const handleModeChange = (tab) => {
    setSelectedTab(tab);
    if (tab === 1) {
      setMode('search');
    } else if (tab === 2) {
      setMode('watchlist');
    } else if (tab === 3) {
      setMode('library');
    } else if (tab === 4) {
      setMode('load');
    } else {
      setMode('search');
    }
  };
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <MainChoiceContainer>
      <ChoiceBarContainer>
        <ChoiceTestContainer selectedTab={selectedTab == 1} onClick={() => handleModeChange(1)}>
          SEARCH
        </ChoiceTestContainer>
        <ChoiceTestContainer selectedTab={selectedTab == 2} onClick={() => handleModeChange(2)}>
          WATCHLIST
        </ChoiceTestContainer>
        <ChoiceTestContainer selectedTab={selectedTab == 3} onClick={() => handleModeChange(3)}>
          LIBRARY
        </ChoiceTestContainer>
        <ChoiceTestContainer selectedTab={selectedTab == 4} onClick={() => handleModeChange(4)}>
          LOAD & DOWNLOAD
        </ChoiceTestContainer>
      </ChoiceBarContainer>
    </MainChoiceContainer>
  );
};

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  STYLES  /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const MainChoiceContainer = styled.div`
  width: 100%;
  overflow: visible;
  align-items: center;
  justify-content: center;
  height: 50px;
  display: flex;
  z-index: 99998;
  margin-bottom: 20px;
`;

const ChoiceBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ChoiceTestContainer = styled.div`
  flex-grow: 1;
  text-align: center;
  line-height: 30px;
  margin: 0 10px;
  border-bottom: ${({ selectedTab }) =>
    (selectedTab && '2px solid var(--main-color-2)') || '2px solid transparent;'};
  color: ${({ selectedTab }) => (selectedTab && 'var(--main-color-3);') || 'var(--main-color-4);'};
  cursor: pointer;
`;

export default SwitchContent;
