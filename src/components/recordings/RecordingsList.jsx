import React from 'react';
import { Link } from 'react-router-dom';

const RecordingsList = ({ recordings }) => {
  const listItems = recordings.map(recording => 
    (<li key={recording.id}>
      <Link to={'/lyrics'}>{recording.title}</Link>
    </li>
    ));

  return <ul>{listItems}</ul>;
};

export default RecordingsList;
