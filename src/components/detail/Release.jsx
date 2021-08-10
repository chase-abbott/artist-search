/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

const Release = ({ coverArt, id, title }) => {
  
  return (
    <>
      <p>{title}</p>
      <Link to={`/recordings/${id}`}>
        {coverArt ? <img src={`https://coverartarchive.org/release/${id}/front`} alt={title}/>
          : <img src="../pic.png" alt="The ONE"/>
        }
        <img/>
      </Link>
    </>
  );
};

export default Release;

