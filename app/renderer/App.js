import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  );
};

export default App;
