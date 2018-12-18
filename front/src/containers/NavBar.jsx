import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { modalToggleOn } from '../actions';


const NavBar = (props) => {
  const { toggleModalOn } = props;
  return (
    <div className="NavBar">
      <NavLink to="/">
        <button type="submit">
          <img src="http://simpleicon.com/wp-content/uploads/home-1.png" alt="Home icon" />
        </button>
      </NavLink>
      <button type="submit" onClick={toggleModalOn}>
        <img src="https://image.flaticon.com/icons/png/512/16/16036.png" alt="Login icon" />
      </button>
    </div>
  );
};

function mdtp(dispatch) {
  return bindActionCreators({
    toggleModalOn: modalToggleOn,
  }, dispatch);
}

export default connect(null, mdtp)(NavBar);
