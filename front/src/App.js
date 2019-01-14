import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginModal from './containers/LoginModal';
import SearchPage from './containers/SearchPage';
import BandPage from './components/BandPage';
import NavBar from './containers/NavBar';
import ContactFormPage from './containers/ContactFormPage';

const App = () => (
  <div className="App">
    <LoginModal />
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/BandPage/:id" component={BandPage} />
      <Route path="/band-contact-form" component={ContactFormPage} />
    </Switch>
  </div>
);

export default App;
