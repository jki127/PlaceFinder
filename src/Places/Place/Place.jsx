import React from 'react';

function Place({ place, onHoverPlace, onClickPlace }) {
  const handleHover = () => {
    onHoverPlace(place.id);
  }
  const handleClick = () => {
    onClickPlace(place.id);
  }
  return (
    <div className="Place pa2" onMouseOver={handleHover} onClick={handleClick}>
      <h6 className="f6 lh-solid black-70">{place.name}</h6>
    </div>
  );
}

export default Place;
