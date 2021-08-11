/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Release = ({ coverArt, id, title, artist }) => {
  const location = {
    pathname: `/recordings/${id}`,
    state: artist
  };
  
  return (
    <>
      <p>{title}</p>
      <Link to={location}>
        {coverArt ? <img src={`https://coverartarchive.org/release/${id}/front`} alt={title}/>
          : <img src="../pic.png" alt="The ONE"/>
        }
        <img/>
      </Link>
    </>
  );
};

export default Release;

Release.propTypes = {
  coverArt: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.object.isRequired
};
