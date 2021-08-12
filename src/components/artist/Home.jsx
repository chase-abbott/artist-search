/* eslint-disable max-len */
import React, { useState } from 'react';
import Search from '../searchBar/Search';
import ArtistList from './ArtistList';
import useSearch from '../state/useSearch';

const Home = () => {
  const [pages, setPages] = useState(1);
  const { inputValue, handleInputChange, handleSubmit, results } = useSearch(pages);

  return (
    <>
      <button 
        disabled={pages <= 1}
        onClick={() => setPages((prevPage) => prevPage - 1)}
      >
        &lt;
      </button>
      {pages}
      <button onClick={() => setPages((prevPage) => prevPage + 1)}>&gt;</button>
      <Search inputValue={inputValue} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      <ArtistList results={results}/> 
    </>
  );

};

export default Home;
