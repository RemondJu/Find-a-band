import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginModal from './containers/LoginModal';
import SearchPage from './containers/SearchPage';
import BandPage from './components/BandPage';
import BandContact from './components/ContactFormPage';
import NavBar from './containers/NavBar';

const App = () => (
  <div className="App">
    <LoginModal />
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/BandPage" component={BandPage} />
      <Route path="/contact-form" component={BandContact} />
    </Switch>
  </div>
);

export default App;
