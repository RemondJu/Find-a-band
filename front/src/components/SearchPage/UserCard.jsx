import React from 'react';
import './UserCard.scss';

const UserCard = (props) => {
  const {
    name, age, email,
  } = props;
  return (
    <div className="UserCard">
      <img
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        alt="Band pic"
      />
      <div>
        <h3>{name}</h3>
        <h5>{email}</h5>
        <p>{age}</p>
        <p>
          Some quick example text to build on the card
          title and make up the bulk of the card&aposs content.
        </p>
        <button type="button">Contact</button>
      </div>
    </div>
  );
};

export default UserCard;
