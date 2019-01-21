import React, { Component } from 'react';
import './SearchBar.scss';
import { NavLink, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayBands, displayUsers } from '../actions';
import { fetchSearchFilter } from '../actions/fetch';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchFilter: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { searchFilter } = this.state;
    const { fetchSearchFilterAction } = this.props;
    console.log('will fetch stuff');
    fetchSearchFilterAction(`http://localhost:3600/api/filter-bands/${searchFilter}`);
  }

  render() {
    const { searchFilter } = this.state;
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={searchFilter} />
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

function mdtp(dispatch) {
  return bindActionCreators({
    displayBandsAction: displayBands,
    displayUsersAction: displayUsers,
    fetchSearchFilterAction: fetchSearchFilter,
  }, dispatch);
}

export default withRouter(connect(null, mdtp)(SearchBar));
