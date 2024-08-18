import React from 'react';

import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import MemberListPage from './page/MemberListPage';
import MemberDetailPage from './page/MemberDetailPage';
import CheerSongListPage from './page/CheerSongListPage';
import AlbumPage from './page/AlbumPage';
import SongPage from './page/SongPage';
import AlbumListPage from './page/AlbumListPage';
import NotFoundPage from './page/NotFoundPage';

import Root from './styles/root';

export default function App() {
  return (
    <Root>
      <Routes>
        <Route exact path="*" element={<NotFoundPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route exact path='/member' element={<MemberListPage/>} />
        <Route path='/member/:name' element={<MemberDetailPage/>} />
        <Route path='/cheer-song' element={<CheerSongListPage/>} />
        <Route path='/album' element={<AlbumListPage/>} />
        <Route exact path='/album/:songList/' element={<SongListPage/>}/>
        <Route exact path='/album/:songList/:song' element={<SongPage/>} />
     </Routes>
    </Root>
  );
}
