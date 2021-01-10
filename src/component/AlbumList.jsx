import React from 'react';

import styled from '@emotion/styled';

import KorAlbumList from './albumList/KorAlbumList';
import EtcAlbumList from './albumList/EtcAlbumList';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export default function AlbumList({
  korMiniAlbums,
  korSingles,
  korDigitalSingles,
  etcAlbums,
  handleClick,
}) {
  return (
    <Container>
      <KorAlbumList
        korMiniAlbums={korMiniAlbums}
        korSingles={korSingles}
        korDigitalSingles={korDigitalSingles}
        handleClick={handleClick}
      />
      <EtcAlbumList
        etcAlbums={etcAlbums}
        handleClick={handleClick}
      />
    </Container>
  );
}
