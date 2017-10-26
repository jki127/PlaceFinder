import React from 'react';

function Place({ place, onHoverPlace, onClickPlace, selected }) {
  const handleHover = () => {
    onHoverPlace(place.id);
  };
  const handleClick = () => {
    onClickPlace(place.id);
  };
  const openNow = () => {
    if (place.opening_hours) {
      const isOpen = place.opening_hours.open_now;
      return (
        <p className={`fw2 ${isOpen ? 'light-green' : 'light-red'}`}>
          {isOpen ? 'Open' : 'Closed'}
        </p>
      );
    }
    return '';
  };

  const backgroundColor = selected ? 'bg-dark-blue' : 'bg-blue';
  return (
    <div
      className={`Place ma2 pa2 white shadow-4 pointer ${backgroundColor}`}
      onMouseOver={handleHover}
      onClick={handleClick}
    >
      <h1 className="f3">{place.name}</h1>
      {openNow()}
    </div>
  );
}

export default Place;
