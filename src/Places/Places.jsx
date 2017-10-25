import React from 'react';
import Place from './Place/Place.jsx';
import './Places.css';

function Places({ places, onHoverPlace, onClickPlace }) {
  let placesJSX = [];
  if (places) {
    placesJSX = places.map(place => {
      return (
        <Place
          key={place.id}
          place={place}
          onHoverPlace={onHoverPlace}
          onClickPlace={onClickPlace}
        />
      );
    });
  }
  return placesJSX;
}

export default Places;
