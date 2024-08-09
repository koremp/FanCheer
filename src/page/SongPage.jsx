import React from 'react';

import { useNavigate } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import SongContainer from '../container/SongContainer';
import BackToCheerSongListButton from '../component/song/BackToCheerSongListButton';

import { OverContainer } from '../styles/page';

import songList from '../../fixtures/songList';

export default function SongPage({ match }) {
  const history = useNavigate();

  function handleClick(url) {
    history.push(url);
  }

  const { id } = match.params;

  const song = songList[parseInt(id, 10)];

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
