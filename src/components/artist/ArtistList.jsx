import React from 'react';
import Artist from './Artist';

const ArtistList = ({ results }) => {

  const listItems = results.map(artist => {
    return (
      <li key={artist.id}>
        <Artist artist={artist}/>
      </li>
    );
  });

  return <ul>{listItems}</ul>; 
};

export default ArtistList;
