import React from 'react';
import Artist from './Artist';
import PropTypes from 'prop-types';

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

ArtistList.propTypes = {
  results: PropTypes.array.isRequired
};
