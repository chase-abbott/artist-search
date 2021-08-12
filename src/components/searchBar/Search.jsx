import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ inputValue, handleInputChange, handleSubmit }) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={inputValue} />
      <button data-testid="search">search</button>
    </form>
  );

};

export default Search;

Search.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
