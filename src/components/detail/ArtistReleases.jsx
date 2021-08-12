// get artist id from searchParams
// make request to API with artist id to get artist details
// check if cover art exists
// if exists, get from URL and display; else display placeholder img
// render list of releases with name header
import React, { useState } from 'react';
import useArtist from '../state/useArtist';
import ReleaseList from './ReleaseList';
import { useLocation } from 'react-router-dom';

const ArtistReleases = () => {
  const [pages, setPages] = useState(1);
  const { releases } = useArtist(pages);
  const { state } = useLocation();
 
  return (
    <>
      <button 
        disabled={pages <= 1}
        onClick={() => setPages((prevPage) => prevPage - 1)}>&lt;</button>
      {pages}
      <button
        onClick={() => setPages((prevPage) => prevPage + 1)}>&gt;</button>
      
      <ReleaseList releases={releases} artist={state}/>
    </>
  );
};

export default ArtistReleases;
