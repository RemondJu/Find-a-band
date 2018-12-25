import React from 'react';
import { connect } from 'react-redux';
import './UsersDisplay.scss';
import UserCard from '../components/SearchPage/UserCard';


const UsersDisplay = (props) => {
  const { users, shouldDisplayUsers } = props;
  return (
    <div className={shouldDisplayUsers ? 'UsersDisplay' : 'hidden'}>
      <h2>
        Users
      </h2>
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
    shouldDisplayUsers: state.shouldDisplayUsers,
  };
}

export default connect(mstp)(UsersDisplay);
