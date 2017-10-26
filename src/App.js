import React, { Component } from 'react';
import Places from './Places/Places.jsx';
import SearchInput from './SearchInput/SearchInput.jsx';
import GoogleMap from './GoogleMap/GoogleMap.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      places: [],
    };
    this.placeSelected = false;
    this.markers = [];

    this.handleNewSearch = this.handleNewSearch.bind(this);
    this.handleNewMarkers = this.handleNewMarkers.bind(this);
    this.handleHoverPlace = this.handleHoverPlace.bind(this);
    this.handleClickPlace = this.handleClickPlace.bind(this);
  }
  componentDidMount() {
    this.mapObject = this.initMap();
  }

  initMap() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: { lat: 37.7830521, lng: -122.3932186 },
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        map.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }

    return map;
  }

  handleNewSearch(event) {
    const query = event.target.value.trim();
    if (query.length > 2) {
      this.retrievePlaces(query);
    }
  }

  retrievePlaces(query) {
    const service = new window.google.maps.places.PlacesService(this.mapObject);
    const request = { keyword: query, bounds: this.mapObject.getBounds() };
    service.nearbySearch(request, (results, status) => {
      // TODO Must add view for bad queries
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ places: results });
      }
    });
  }

  handleNewMarkers(markers) {
    this.markers = markers;
  }

  handleHoverPlace(placeId) {
    if (!this.placeSelected) {
      const marker = this.markers[placeId];
      window.google.maps.event.trigger(marker, 'click');
    }
  }

  handleClickPlace(placeId) {
    const marker = this.markers[placeId];
    marker.setAnimation(null);
    this.mapObject.setCenter(marker.getPosition());
    this.mapObject.setZoom(15);
    window.google.maps.event.trigger(marker, 'click');
    this.placeSelected = true;
  }

  render() {
    return (
      <div className="App">
        <div className="fl w-30 h-100 overflow-container">
          <SearchInput onNewSearch={this.handleNewSearch} />
          <Places
            places={this.state.places}
            onHoverPlace={this.handleHoverPlace}
            onClickPlace={this.handleClickPlace}
          />
        </div>
        <div className="fl w-70 h-100">
          <GoogleMap
            className="h-100"
            mapObject={this.mapObject}
            places={this.state.places}
            markers={this.markers}
            onNewMarkers={this.handleNewMarkers}
          />
        </div>
      </div>
    );
  }
}

export default App;
