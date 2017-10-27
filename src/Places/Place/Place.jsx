import React from 'react';
import "./Place.css";

function Place({ place, onClickPlace, selected }) {
  const handleClick = () => {
    onClickPlace(place.id);
  };
  const renderOpenNow = () => {
    if (place.opening_hours) {
      const isOpen = place.opening_hours.open_now;
      return (
        <p className={`fw2 mt1 ${isOpen ? 'light-green' : 'light-red'}`}>
          {isOpen ? 'Open' : 'Closed'}
        </p>
      );
    }
    return '';
  };

  const renderPlacePhoto = () => {
    if (place.photos) {
      return (
        <img
          src={place.photos[0].getUrl({ maxWidth: 300, maxHeight: 300 })}
          alt={place.name}
          height="100%"
        />
      );
    }
    return '';
  };

  const renderPlaceAddress = () => {
    // Remove the country
    const address_components = place.formatted_address.split(',').slice(0, -1);
    const street_address = address_components.shift();
    const city_state = address_components.join(',');
    return (
      <span>
        {street_address}
        <br />
        {city_state}
      </span>
    );
  };

  const backgroundColor = selected ? 'bg-dark-blue' : 'bg-blue';
  return (
    <div
      className={`Place h3 ma2 white shadow-4 pointer ${backgroundColor} cf`}
      onClick={handleClick}
    >
      <div className="fl w-30 h-100">{renderPlacePhoto()}</div>
      <div className="fl w-70 pa2">
        <h5 className="f5 mt1 mb1">{place.name}</h5>
        {renderOpenNow()}
        <p className="mt1">{renderPlaceAddress()}</p>
      </div>
    </div>
  );
}

export default Place;
