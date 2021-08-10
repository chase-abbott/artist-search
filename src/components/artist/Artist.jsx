import React from 'react';
import { Link } from 'react-router-dom';

const Artist = ({ artist }) => {
  return (
    <>
      <Link to={`/artist-details/${artist.id}`}>{artist.name}</Link>
      {artist.disambiguation ? <h4>{artist.disambiguation}</h4> : null} 
    </>
  );
};

export default Artist;
