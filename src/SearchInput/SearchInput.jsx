import React from 'react';
import "./SearchInput.css";

function SearchInput({ onNewSearch }) {
  return (
    <div className="ma2">
      <input
        className="SearchInput__input w-100 h2"
        type="text"
        placeholder="Find your place"
        onInput={onNewSearch}
      />
    </div>
  );
}

export default SearchInput;
