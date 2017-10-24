import React, { Component } from 'react';
import Places from './Places/Places.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.setState({ map: this.initMap() });
  }

  initMap() {
    const coordinates = { lat: -25.363, lng: 131.044 };

    return new window.google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: coordinates,
    });
  }

  render() {
    return (
      <div className="App">
        <Places googleMap={this.state.map} className="fl w-30"/>
        <div id="map" className="fl w-70 h-100"/>
      </div>
    );
  }
}

export default App;
