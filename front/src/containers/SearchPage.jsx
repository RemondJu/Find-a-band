import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar';
import SearchBar from '../components/SearchBar';
import BandsDisplay from '../components/SearchPage/BandsDisplay';
import UsersDisplay from '../components/SearchPage/UsersDisplay';
import { displayBands, displayUsers } from '../actions';

const SearchPage = (props) => {
  const { displayBandsAction, displayUsersAction } = props;
  return (
    <div className="SearchPage">
      <NavBar />
      <SearchBar />
      <div>
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
