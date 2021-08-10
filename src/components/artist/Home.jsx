/* eslint-disable max-len */
import React from 'react';
import Search from '../searchBar/Search';
import ArtistList from './ArtistList';
import useSearch from '../state/useSearch';

const Home = () => {
  const { inputValue, handleInputChange, handleSubmit } = useSearch();

  return (
    <>
      <Search inputValue={inputValue} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
      {/* <ArtistList/> */}
    </>
  );

};

export default Home;
