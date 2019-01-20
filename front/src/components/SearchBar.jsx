import React, { Component } from 'react';
import './SearchBar.scss';
import { NavLink, withRouter } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('will do stuff');
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <NavLink to="/search">
            <button type="submit">
              <img src="https://image.flaticon.com/icons/png/512/9/9383.png" alt="search button" />
            </button>
          </NavLink>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
