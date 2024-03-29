import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './js/components/Main';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
};

export default App;
