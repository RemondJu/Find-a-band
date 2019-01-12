import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './BandsDisplay.scss';
import BandCard from '../components/SearchPage/BandCard';
import { fetchBands } from '../actions/fetch';

class BandsDisplay extends Component {
  componentDidMount() {
    const { fetchBandsAction } = this.props;
    fetchBandsAction('http://localhost:3600/api/bands');
  }

  render() {
    const { bands, shouldDisplayBands } = this.props;
    return (
      <div className={shouldDisplayBands ? 'BandsDisplay' : 'hidden'}>
        <h2>
          Bands
        </h2>
        <div className="bandsCards">
          {bands.map(band => (
            <BandCard
              key={band.band_id}
              id={band.band_id}
              name={band.name}
              members={band.members}
              maxMembers={band.max_members}
              email={band.email}
              bio={band.bio}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mstp = state => ({
  bands: state.fetchBandsSuccess,
  shouldDisplayBands: state.shouldDisplayBands,
});

const mdtp = dispatch => bindActionCreators({
  fetchBandsAction: fetchBands,
}, dispatch);

export default connect(mstp, mdtp)(BandsDisplay);
