import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import MembersPage from './page/MembersPage';
import MemberDetailPage from './page/MemberDetailPage';
import SelectSongPage from './page/SelectSongPage';
import SongPage from './page/SongPage';
import NotFoundPage from './page/NotFoundPage';

import Root from './styles/root';

export default function App() {
  return (
    <Root>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/member" component={MembersPage} />
        <Route path="/member/:id" component={MemberDetailPage} />
        <Route path="/select-song" component={SelectSongPage} />
        <Route path="/song/:id" component={SongPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Root>
  );
}
