import React from 'react';
import { connect } from 'react-redux';
import './HomePage.scss';
import SearchBar from '../SearchBar';
import NavBar from '../../containers/NavBar';

const HomePage = (props) => {
  const { welcome } = props;
  return (
    <div className="HomePage">
      <NavBar />
      <SearchBar />
      <h1>{welcome}</h1>
      <h3>How to use the platform ?</h3>
      <ul>
        <li>
          <img
            width="30px"
            src="https://image.flaticon.com/icons/png/512/16/16036.png"
            alt="Login icon"
          />
          Log in or sign in to access your account
        </li>
        <li>
          Put in some informations about yourself
          <img
            width="30px"
            src="http://cdn.onlinewebfonts.com/svg/img_215612.png"
            alt="Write icon"
          />
        </li>
        <li>
          <img
            width="30px"
            src="http://simpleicon.com/wp-content/uploads/multy-user.png"
            alt="People icon"
          />
          Browse for musicians, bands in your town or anywhere else
        </li>
        <li>
          Check informations about other members
          <img
            width="30px"
            src="https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-512.png"
            alt="Check icon"
          />
        </li>
        <li>
          <img
            width="30px"
            src="https://img.icons8.com/metro/1600/chat.png"
            alt="Chat icon"
          />
          Contact people and make some friends to play with !
        </li>
      </ul>
    </div>
  );
};

function mstp(state) {
  return {
    welcome: state.welcome,
  };
}

export default connect(mstp)(HomePage);
