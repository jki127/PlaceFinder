import React from 'react';

function Place({ place }) {
  return (
    <div className="Place pa2">
      <h6 className="f6 lh-solid black-70">{place.name}</h6>
    </div>
  );
}

export default Place;
