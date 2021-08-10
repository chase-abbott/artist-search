import React from 'react';
import useSearch from '../state/useSearch';

const Search = ({ inputValue, handleInputChange, handleSubmit }) => {
  

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={inputValue} />
      <button>search</button>
    </form>
  );

};

export default Search;
