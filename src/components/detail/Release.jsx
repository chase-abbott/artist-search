/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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

