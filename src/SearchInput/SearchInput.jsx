import React from 'react';

function SearchInput({ onNewSearch }){
  return (
    <input
      type="text"
      placeholder="Find your place"
      onInput={onNewSearch}
    />
  );
}

export default SearchInput;
