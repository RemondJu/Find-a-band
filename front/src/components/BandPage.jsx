import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBand } from '../actions/fetch';
import './BandPage.scss';

class BandPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { match, fetchBandAction } = this.props;
    fetchBandAction(`http://localhost:3600/api/band/${match.params.id}`);
  }

  render() {
    const { band } = this.props;
    return (
      <div className="BandPage">
        <h1>{band ? band.name : 'Band name'}</h1>
        <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=1150%C3%97380&w=1150&h=380" alt="placeholder" />
        <p>{band ? band.bio : 'Band informations'}</p>
        <NavLink to="band-contact-form">
          <button type="button">Contact</button>
        </NavLink>
      </div>
    );
  }
}

const mstp = state => ({
  band: state.fetchBandSuccess,
});

const mdtp = dispatch => bindActionCreators({
  fetchBandAction: fetchBand,
}, dispatch);

export default connect(mstp, mdtp)(BandPage);
