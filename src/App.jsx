import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

// for og img
import { Helmet } from 'react-helmet';

import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import MemberListPage from './page/MemberListPage';
import MemberDetailPage from './page/MemberDetailPage';
import CheerSongListPage from './page/CheerSongListPage';
import AlbumPage from './page/AlbumPage';
import CheerSongPage from './page/CheerSongPage';
import AlbumListPage from './page/AlbumListPage';
import NotFoundPage from './page/NotFoundPage';

import Root from './styles/root';

export default function App() {
  const title = "FanCheer";
  const desc = "(여자)아이들 팬페이지";

  return (
    <Root>
      <Helmet>
        <meta name="author" content="Dokyun Claire Lim"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="FanCheer"/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={desc}/>
        <meta property="og:url" content="https://koremp.github.io/fancheer"/>
        <meta property="og:image" content='/og-img.png' alt="(여자)아이들 팬페이지 Opengraph Image"/>
      </Helmet>
      <Routes path="/home">
        <Route path='/home' element={<HomePage/>} />
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route exact path='/member' element={<MemberListPage/>} />
        <Route path='/member/:name' element={<MemberDetailPage/>} />
        <Route exact path='/album' element={<AlbumListPage/>} />
        <Route exact path='/album/:albumName/' element={<AlbumPage />}/>
        <Route exact path='/album/:albumName/:songName' element={<></>}/>
        <Route exact path='/cheering' element={<CheerSongListPage/>} />
        <Route path='/cheering/:songName' element={<CheerSongPage />} />
        {/* <Route exact path='/albu/:albumName/:songName/cheering' element={<CheerSongPage/>} /> */}
     </Routes>
    </Root>
  );
}
