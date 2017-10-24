import React from 'react';
import Place from './Place/Place'

class Places extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  retrievePlaces() {
    const service = new window.google.maps.places.PlacesService(
      this.props.googleMap
    );
    const callback = (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ places: results });
      }
    };
    const request = {
      query: 'pizza',
    };
    service.textSearch(request, callback);
  }

  convertToTag(place) {
    return <Place key={place.id} place={place} />;
  }

  renderPlaces() {
    let placesJSX = [];
    if (this.props.googleMap) {
      this.retrievePlaces();
      if (this.state.places) {
        placesJSX = this.state.places.map(this.convertToTag);
      }
    }
    return placesJSX;
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.renderPlaces()}
      </div>
    );
  }
}

export default Places;
