import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginModal from './containers/LoginModal';
import SearchPage from './containers/SearchPage';

const App = () => (
  <div className="App">
    <LoginModal />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
    </Switch>
  </div>
);

export default App;
