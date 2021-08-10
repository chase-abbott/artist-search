// get artist id from searchParams
// make request to API with artist id to get artist details
// check if cover art exists
// if exists, get from URL and display; else display placeholder img
// render list of releases with name header
import React from 'react';
import useArtist from '../state/useArtist';
import ReleaseList from './ReleaseList';

const ArtistReleases = () => {
  const { releases } = useArtist();
  return <ReleaseList releases={releases} />;
};

export default ArtistReleases;
