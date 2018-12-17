import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage/HomePage';

const App = () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
