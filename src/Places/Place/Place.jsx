import React from 'react';

function Place({ place, onHoverPlace }) {
  const handleHover = () => {
    onHoverPlace(place.id);
  }
  return (
    <div className="Place pa2" onMouseOver={handleHover}>
      <h6 className="f6 lh-solid black-70">{place.name}</h6>
    </div>
  );
}

export default Place;
