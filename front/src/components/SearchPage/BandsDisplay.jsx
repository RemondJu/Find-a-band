import React from 'react';
import './BandsDisplay.scss';
import { connect } from 'react-redux';
import BandCard from './BandCard';

const BandsDisplay = (props) => {
  const { bands, bandsDiplayClass } = props;
  console.log(props);
  return (
    <div className={`BandsDisplay ${bandsDiplayClass ? '' : 'hidden'}`}>
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
    bandsDiplayClass: state.bandsDiplayClass,
  };
}

export default connect(mstp)(BandsDisplay);
