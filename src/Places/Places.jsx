import React from 'react';
import Place from './Place/Place.jsx';
import './Places.css';

class Places extends React.Component {
  render() {
    let placesJSX = [];
    if (this.props.places) {
      placesJSX = this.props.places.map(place => {
        return (
          <Place
            key={place.id}
            place={place}
            onClickPlace={this.props.onClickPlace}
            selected={this.props.selectedPlaceId === place.id}
          />
        );
      });
    }
    return placesJSX;
  }
}

export default Places;
