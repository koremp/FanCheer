import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import MemberListPage from './page/MemberListPage';
import MemberDetailPage from './page/MemberDetailPage';
import CheerSongListPage from './page/CheerSongListPage';
import SongListPage from './page/SongListPage';
import SongPage from './page/SongPage';
import AlbumListPage from './page/AlbumListPage';
import NotFoundPage from './page/NotFoundPage';

import Root from './styles/root';

export default function App() {
  return (
    <Root>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/member" component={MemberListPage} />
        <Route path="/member/:id" component={MemberDetailPage} />
        <Route path="/cheer-song" component={CheerSongListPage} />
        <Route exact path="/song" component={SongListPage} />
        <Route path="/song/:id" component={SongPage} />
        <Route path="/album" component={AlbumListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Root>
  );
}
