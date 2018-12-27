import React from 'react';
import { NavLink } from 'react-router-dom';
import './BandPage.scss';

const BandPage = () => (
  <div className="BandPage">
    <h1>Band Name</h1>
    <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=1150%C3%97380&w=1150&h=380" alt="placeholder" />
    <p>Band informations</p>
    <NavLink to="contact-form">
      <button type="button">Contact</button>
    </NavLink>
  </div>
);

export default BandPage;
