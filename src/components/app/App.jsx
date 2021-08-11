import React from 'react';
import Home from '../artist/Home';
import { Switch, Route } from 'react-router-dom';
import ArtistReleases from '../detail/ArtistReleases';
import RecordingsPage from '../recordings/RecordingsPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/artist-details/:id" component={ArtistReleases}/>
      <Route exact path="/recordings/:id" component={RecordingsPage} />
      <Route exact path="/lyrics/:artist/:title"/>
    </Switch>
  );
}
