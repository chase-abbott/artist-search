import React from 'react';
import Home from '../artist/Home';
import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  );
}
