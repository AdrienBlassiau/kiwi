import React, { useState, useEffect } from 'react';

const SwitchContent = (props) => {
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////  DATA AND FUNCTIONS  ///////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const [selectedTab, setSelectedTab] = useState(1);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////  HANDLING EVENTS  /////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const handleModeChange = (tab) => {
    setSelectedTab(tab);
    if (tab===1){
      setMode('search')
    }
    else if (tab===2){
      setMode('watchlist')
    }
    else if (tab===3){
      setMode('library')
    }
    else if (tab===4){
      setMode('load')
    }
    else{
      setMode('search')
    }
  }
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  COMPONENTS  ///////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div className="main-choice-container">
      <div className="choice-bar-container">
        <div className={"choice-test-container "+(selectedTab==1? "choice-selected" : "")} onClick={() => handleModeChange(1)}>SEARCH</div>
        <div className={"choice-test-container "+(selectedTab==2?"choice-selected" : "")} onClick={() => handleModeChange(2)}>WATCHLIST</div>
        <div className={"choice-test-container "+(selectedTab==3?"choice-selected" : "")} onClick={() => handleModeChange(3)}>LIBRARY</div>
        <div className={"choice-test-container "+(selectedTab==4?"choice-selected" : "")} onClick={() => handleModeChange(4)}>LOAD & DOWNLOAD</div>
      </div>
    </div>
  );
};

export default SwitchContent;