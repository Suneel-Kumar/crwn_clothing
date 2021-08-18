import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
