import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import SongContainer from '../container/SongContainer';
import BackToCheerSongListButton from '../component/song/BackToCheerSongListButton';

import { OverContainer } from '../styles/page';

import songList from '../../fixtures/songList';

export default function SongPage() {
  const nav = useNavigate();

  function handleClick(url) {
    nav(url);
  }

  const { songName } = useParams();

  // const song = songList[parseInt(id, 10)];

  return (
    <OverContainer>
      <TopBarContainer
        handleClick={handleClick}
      />
      <SongContainer
        song={song}
        handleClick={handleClick}
      />
      <BackToCheerSongListButton
        onClick={handleClick}
      />
    </OverContainer>
  );
}
