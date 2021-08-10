import React from 'react';
import useSearch from '../components/state/useSearch';

const Search = () => {
  const { inputValue, handleInputChange, handleSubmit } = useSearch();

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={inputValue} />
      <button>search</button>
    </form>
  );

};

export default Search;
