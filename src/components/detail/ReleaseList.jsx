/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import Release from './Release';

const ReleaseList = ({ releases, artist }) => {


  const releaseItem = releases.map(release => {
    return (<li key={release.id}>
      <Release coverArt={release['cover-art-archive'].front} id={release.id} title={release.title} artist={artist}/>
    </li>);
  });
  return <ul>{releaseItem}</ul>;

};

export default ReleaseList;
