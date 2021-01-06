import React from 'react';

import styled from '@emotion/styled';

import AlbumList from '../component/AlbumList';

import {
  korMiniAlbumImages,
  korSingleImages,
  korDigitalSingleImages,
  etcAlbumImages,
} from '../assets/images';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '1em',
});

export default function AlbumListContainer({
  korMiniAlbums,
  korSingles,
  korDigitalSingles,
  etcAlbums,
  handleClick,
}) {
  const korMiniAlbumIds = [1, 2, 3, 4];
  const korSingleIds = [1];
  const korDigitalSingleIds = [1, 2, 3];
  const etcAlbumIds = [1, 2, 3, 4];

  return (
    <Container>
      <AlbumList
        name="한국 미니 앨범"
        ids={korMiniAlbumIds}
        albums={korMiniAlbums}
        images={korMiniAlbumImages}
        handleClick={handleClick}
      />
      <AlbumList
        name="한국 싱글"
        ids={korSingleIds}
        albums={korSingles}
        images={korSingleImages}
        handleClick={handleClick}
      />
      <AlbumList
        name="한국 디지털 싱글"
        ids={korDigitalSingleIds}
        albums={korDigitalSingles}
        images={korDigitalSingleImages}
        handleClick={handleClick}
      />
      {
        false && (
          <AlbumList
            name="기타"
            ids={etcAlbumIds}
            albums={etcAlbums}
            images={etcAlbumImages}
            handleClick={handleClick}
          />
        )
      }
    </Container>
  );
}
