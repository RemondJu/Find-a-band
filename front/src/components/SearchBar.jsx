import React from 'react';
import './SearchBar.scss';
import { NavLink } from 'react-router-dom';

const SearchBar = () => (
  <div className="SearchBar">
    <input />
    <NavLink to="/search">
      <button type="submit">
        <img src="https://image.flaticon.com/icons/png/512/9/9383.png" alt="search button" />
      </button>
    </NavLink>
  </div>
);

export default SearchBar;
