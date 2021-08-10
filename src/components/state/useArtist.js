import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useArtist = () => {
  const [releases, setReleases] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    return fetch(`https://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
      .then(res => res.json())
      .then(res => setReleases(res.releases));

  }, []);
  return { releases }; 
};

export default useArtist;
