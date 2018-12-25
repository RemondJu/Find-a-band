import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar';
import SearchBar from '../components/SearchBar';
import BandsDisplay from './BandsDisplay';
import UsersDisplay from './UsersDisplay';
import { displayBands, displayUsers } from '../actions';
import './SearchPage.scss';

const SearchPage = (props) => {
  const { displayBandsAction, displayUsersAction } = props;
  return (
    <div className="SearchPage">
      <NavBar />
      <SearchBar />
      <div className="searchSectionButtons">
        <button type="button" onClick={displayBandsAction}>
          <h2>Bands</h2>
        </button>
        <button type="button" onClick={displayUsersAction}>
          <h2>users</h2>
        </button>
      </div>
      <BandsDisplay />
      <UsersDisplay />
    </div>
  );
};

function mdtp(dispatch) {
  return bindActionCreators({
    displayBandsAction: displayBands,
    displayUsersAction: displayUsers,
  }, dispatch);
}

export default connect(null, mdtp)(SearchPage);
