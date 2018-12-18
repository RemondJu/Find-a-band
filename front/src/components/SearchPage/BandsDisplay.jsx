import React from 'react';
import './BandsDisplay.scss';
import { connect } from 'react-redux';
import BandCard from './BandCard';

const BandsDisplay = (props) => {
  const { bands } = props;
  return (
    <div className="BandsDisplay">
      <h2>Bands</h2>
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
    bands: state.bands,
  };
}

export default connect(mstp)(BandsDisplay);
