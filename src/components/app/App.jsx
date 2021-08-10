import React from 'react';
import Home from '../artist/Home';
import { Switch, Route } from 'react-router-dom';
import ArtistReleases from '../detail/ArtistReleases';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/artist-details/:id" component={ArtistReleases}/>
    </Switch>
  );
}
