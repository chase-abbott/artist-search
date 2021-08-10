/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useRecording = () => {
  const [recordings, setRecordings] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    return fetch(`https://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
      .then(res => res.json())
      .then(res => setRecordings(res.recordings));

  }, []);
  return { recordings };
};

export default useRecording;
