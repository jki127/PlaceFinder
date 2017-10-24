import React from 'react';
import Place from './Place/Place.jsx';
import './Places.css';

function Places({ places }) {
  let placesJSX = [];
  if (places) {
    placesJSX = places.map(place => {
      return <Place key={place.id} place={place} />;
    });
  }
  return placesJSX;
}

export default Places;
