/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useArtist = (page) => {
  const [releases, setReleases] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    return fetch(`https://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
      .then(res => res.json())
      .then(res => setReleases(res.slice((page - 1) * 10, page * 10)));

  }, [page]);
  return { releases }; 
};

export default useArtist;
