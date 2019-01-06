import React from 'react';
import { connect } from 'react-redux';
import './BandsDisplay.scss';
import BandCard from '../components/SearchPage/BandCard';

const BandsDisplay = (props) => {
  const { bands, shouldDisplayBands } = props;
  return (
    <div className={shouldDisplayBands ? 'BandsDisplay' : 'hidden'}>
      <h2>
        Bands
      </h2>
      <div className="bandsCards">
        {bands.map(band => (
          <BandCard
            key={band.id}
            name={band.name}
            members={band.members}
            maxMembers={band.maxMembers}
            email={band.email}
          />
        ))}
      </div>
    </div>
  );
};

function mstp(state) {
  return {
    bands: state.fetchDataSuccess,
    shouldDisplayBands: state.shouldDisplayBands,
  };
}

export default connect(mstp)(BandsDisplay);
