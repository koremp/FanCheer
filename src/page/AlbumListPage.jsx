import React from 'react';

import { useNavigate } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import AlbumListContainer from '../container/AlbumListContainer';

import { OverContainer } from '../styles/page';

import {
  korMiniAlbums,
  korSingles,
  korDigitalSingles,
  etcAlbums,
} from '../../fixtures/album';

export default function AlbumPage() {
  const nav = useNavigate();

  function handleClick(url) {
    nav(url);
  }

  return (
    <OverContainer>
      <TopBarContainer
        handleClick={handleClick}
      />
      <AlbumListContainer
        korMiniAlbums={korMiniAlbums}
        korSingles={korSingles}
        korDigitalSingles={korDigitalSingles}
        etcAlbums={etcAlbums}
        handleClick={handleClick}
      />
    </OverContainer>
  );
}
