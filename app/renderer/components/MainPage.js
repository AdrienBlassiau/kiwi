import React, { useState, useEffect } from 'react';
import MainContainer from './MainContainer';
import MainTopBar from './MainTopBar';
import SearchBar from './SearchBar';
import Style from '../css/AppCss.js';

import newDriver from '../scrapper/driver.js';

// import Style from '../css/App.css';
// import '../css/Icon.css';

const MainPage = () => {
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    setDriver(newDriver);
    console.log('new : ');
    console.log(newDriver);
  }, []);

  return (
    <div>
      <Style />
      <div className="master-component">
        <MainTopBar />
        <SearchBar />
        <MainContainer driver={driver} />
      </div>
    </div>
  );
};

export default MainPage;
