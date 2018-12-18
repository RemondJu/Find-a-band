import React from 'react';
import NavBar from '../../containers/NavBar';
import SearchBar from '../SearchBar';
import BandsDisplay from './BandsDisplay';
import UsersDisplay from './UsersDisplay';

const SearchPage = () => (
  <div className="SearchPage">
    <NavBar />
    <SearchBar />
    <BandsDisplay />
    <UsersDisplay />
  </div>
);

export default SearchPage;
