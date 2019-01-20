import React, { Component } from 'react';
import './SearchBar.scss';
import { NavLink, withRouter } from 'react-router-dom';

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
    console.log('will fetch stuff');
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

export default withRouter(SearchBar);
