import React from 'react';

// TODO Convert to stateless component
class GoogleMap extends React.Component {
  constructor() {
    super();
    this.markers = [];
  }

  clearMarkers(){
    const markers = this.markers;
    if(markers.length > 0){
      for(let i = 0; i < markers.length; i++){
        const marker = markers[i];
        marker.setMap(null);
      }
    }
  }

  addMarkers(places, mapObject) {
    this.clearMarkers();
    let markers = [];
    for (let i = 0; i < places.length; i++) {
      const place = places[i];
      const marker = new window.google.maps.Marker({
        map: mapObject,
        title: place.name,
        position: place.geometry.location,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: place.name,
      });

      marker.addListener('click', () => {
        if (this.currentInfoWindow) {
          this.currentInfoWindow.close();
        }
        infoWindow.open(mapObject, marker);
        this.currentInfoWindow = infoWindow;
      });
      markers.push(marker);
    }
    this.markers = markers;
  }

  render() {
    if (this.props.mapObject && this.props.places) {
      this.addMarkers(this.props.places, this.props.mapObject);
    }
    return <div id="map" className={`${this.props.className}`} />;
  }
}

export default GoogleMap;
