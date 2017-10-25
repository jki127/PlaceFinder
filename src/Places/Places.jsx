import React from 'react';
import Place from './Place/Place.jsx';
import './Places.css';

function Places({ places, onHoverPlace}) {
  let placesJSX = [];
  if (places) {
    placesJSX = places.map(place => {
      return (
        <Place
          key={place.id}
          place={place}
          onHoverPlace={onHoverPlace}
        />
      );
    });
  }
  return placesJSX;
}

export default Places;
