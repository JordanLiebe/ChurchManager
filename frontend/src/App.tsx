import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Base/Header';
import ChurchSelectionPage from './components/Pages/ChurchSelectionPage';
import DashboardPage from './components/Pages/DashboardPage';

import 'bootstrap/dist/css/bootstrap.min.css';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function App() {
  const [church, setChurch] = useState<string>('');
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ChurchSelectionPage} />
          <Redirect exact path="/:church" to="/:church/Dashboard" />
          <Route path="/:church/Dashboard" component={DashboardPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
