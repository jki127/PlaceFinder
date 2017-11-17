import React from 'react';

class GoogleMap extends React.Component {
  shouldComponentUpdate(nextProps){
    if(this.props.places !== nextProps.places){
      this.addMarkers(nextProps.places, nextProps.mapObject);
    }
    return false;
  }

  clearMarkers(){
    const markers = Object.values(this.props.markers);
    if(markers.length > 0) {
      for(let i = 0; i < markers.length; i++){
        const marker = markers[i];
        marker.setMap(null);
      }
    }
  }

  addMarkers(places, mapObject) {
    this.clearMarkers();
    let markers = {};
    for (let i = 0; i < places.length; i++) {
      const place = places[i];
      const marker = new window.google.maps.Marker({
        map: mapObject,
        title: place.name,
        position: place.geometry.location,
        animation: window.google.maps.Animation.DROP,
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
        this.props.onClickMarker(place.id);
      });

      markers[place.id] = marker;
    }
    this.props.onNewMarkers(markers);
  }

  render() {
    return <div id="map" className={`${this.props.className}`} />;
  }
}

export default GoogleMap;
