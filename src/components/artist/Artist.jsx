import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artist = ({ artist }) => {
  // createContext(artist.name);
  const location = {
    pathname: `/artist-details/${artist.id}`,
    state: {
      name: artist.name
    }
  };
  return (
    <>
      <Link to={location}>{artist.name}</Link>
      {artist.disambiguation ? <h4>{artist.disambiguation}</h4> : null} 
    </>
  );
};

export default Artist;

Artist.propTypes = {
  artist: PropTypes.object.isRequired
};
