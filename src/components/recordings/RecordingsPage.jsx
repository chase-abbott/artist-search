import React from 'react';
import RecordingsList from './RecordingsList';
import useRecording from '../state/useRecording';

const RecordingsPage = () => {
  const { recordings } = useRecording();
  return <RecordingsList recordings={recordings} />;

};

export default RecordingsPage;
