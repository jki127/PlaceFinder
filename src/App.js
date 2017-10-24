import React, { Component } from 'react';
import Places from './Places/Places.jsx';
import SearchInput from './SearchInput/SearchInput.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleNewSearch = this.handleNewSearch.bind(this);
  }
  componentDidMount() {
    this.setState({ googleMap: this.initMap() });
  }

  initMap() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 10,
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
    const service = new window.google.maps.places.PlacesService(
      this.state.googleMap
    );
    const request = { query: query };
    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ places: results });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="fl w-30">
          <SearchInput onNewSearch={this.handleNewSearch} />
          <Places
            googleMap={this.state.googleMap}
            places={this.state.places}
          />
        </div>
        <div id="map" className="fl w-70 h-100" />
      </div>
    );
  }
}

export default App;
