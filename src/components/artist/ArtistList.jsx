import React from 'react';

const ArtistList = ({ results }) => {

  const listItems = results.map(artist => {
    return (
      <li key={artist.id}>
        <h1> {artist.name}</h1>
      </li>
    );
  });

  return <ul>{listItems}</ul>; 
};

export default ArtistList;
