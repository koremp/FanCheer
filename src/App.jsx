import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './page/HomePage';
import SelectSongPage from './page/SelectSongPage';
import SongPage from './page/SongPage';
import NotFoundPage from './page/NotFoundPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/select-song" component={SelectSongPage} />
        <Route path="/song/:id" component={SongPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
