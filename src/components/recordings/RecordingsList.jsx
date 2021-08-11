/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


const RecordingsList = ({ recordings }) => {
  const { state } = useLocation();
  
  const listItems = recordings.map(recording => 
    (<li key={recording.id}>
      <Link to={`/lyrics/${state.name}/${recording.title}`}>{recording.title}</Link>
    </li>
    ));

  return <ul>{listItems}</ul>;
};

export default RecordingsList;

RecordingsList.propTypes = {
  recordings: PropTypes.array.isRequired
};
