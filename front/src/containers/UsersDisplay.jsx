import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/fetch';
import './UsersDisplay.scss';
import UserCard from '../components/SearchPage/UserCard';

//  'http://localhost:3600/api/users';

class UsersDisplay extends Component {
  componentDidMount() {
    const { fetchDataAction } = this.props;
    fetchDataAction('http://localhost:3600/api/users');
  }

  render() {
    const {
      users,
      shouldDisplayUsers,
      isLoading,
      hasErrored,
    } = this.props;
    let result = <h1>Hello</h1>;
    if (hasErrored) {
      result = <h1>Something wrong happened...</h1>;
    } else if (isLoading) {
      result = <h1>Data loading...</h1>;
    } else {
      result = (
        <div className={shouldDisplayUsers ? 'UsersDisplay' : 'hidden'}>
          <h2>
            Users
          </h2>
          <div className="userCards">
            {users.map(user => (
              <UserCard
                key={user.user_id}
                name={user.nickname}
                age={user.age}
                email={user.email}
                pic={user.profile_picture}
              />
            ))}
          </div>
        </div>
      );
    }
    return result;
  }
}

const mstp = state => ({
  users: state.fetchDataSuccess,
  isLoading: state.fetchIsLoading,
  hasErrored: state.fetchHasErrored,
  shouldDisplayUsers: state.shouldDisplayUsers,
});

const mdtp = dispatch => bindActionCreators({
  fetchDataAction: fetchData,
}, dispatch);

export default connect(mstp, mdtp)(UsersDisplay);
