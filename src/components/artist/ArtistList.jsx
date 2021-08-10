import React, { useEffect } from 'react';
import useSearch from '../state/useSearch';
import { useLocation } from 'react-router-dom';

const ArtistList = () => {
  const { state } = useLocation([]);

  const listItems = state.map(artist => {
    <li key={artist.id}>
      <h1> {artist.name}</h1>
    </li>;
  });


  return <ul> {listItems}</ul>; 
};

export default ArtistList;
