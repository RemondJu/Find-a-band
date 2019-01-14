import React from 'react';
import './BandCard.scss';
import { NavLink } from 'react-router-dom';

const BandCard = (props) => {
  const {
    name, members, maxMembers, email, bio, id,
  } = props;
  return (
    <div className="BandCard">
      <NavLink to={`/BandPage/${id}`}>
        <img
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Band pic"
        />
      </NavLink>
      <div>
        <h3>{name}</h3>
        <h5>{email}</h5>
        <p>
          Members:
          {members}
          /
          {maxMembers}
        </p>
        <p>
          {bio}
        </p>
        <NavLink to="/band-contact-form">
          <button type="button">Contact</button>
        </NavLink>
      </div>
    </div>
  );
};

export default BandCard;
