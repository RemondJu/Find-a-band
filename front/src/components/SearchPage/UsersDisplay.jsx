import React from 'react';
import { connect } from 'react-redux';
import './UsersDisplay.scss';
import UserCard from './UserCard';


const UsersDisplay = (props) => {
  const { users } = props;
  return (
    <div className="UsersDisplay">
      <h2>Users</h2>
      <div className="userCards">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            age={user.age}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
};

function mstp(state) {
  return {
    users: state.users,
  };
}

export default connect(mstp)(UsersDisplay);
