import React from 'react';
import Place from './Place/Place.jsx';
import './Places.css';

class Places extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPlaceId: null,
    };

    this.handleClickPlace = this.handleClickPlace.bind(this);
  }

  handleClickPlace(placeId) {
    this.setState({ selectedPlaceId: placeId });
    this.props.onClickPlace(placeId);
  }

  render() {
    let placesJSX = [];
    if (this.props.places) {
      placesJSX = this.props.places.map(place => {
        return (
          <Place
            key={place.id}
            place={place}
            onHoverPlace={this.props.onHoverPlace}
            onClickPlace={this.handleClickPlace}
            selected={this.state.selectedPlaceId === place.id}
          />
        );
      });
    }
    return placesJSX;
  }
}

export default Places;
