import React from 'react';

import styled from '@emotion/styled';

import {
  korMiniAlbumImages,
  korSingleImages,
  korDigitalSingleImages,
} from '../../assets/images';

import DefaultAlbumList from './DefaultAlbumList';

const AlbumListContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export default function korAlbumList({
  korMiniAlbums,
  korSingles,
  korDigitalSingles,
  handleClick,
}) {
  return (
    <AlbumListContainer>
      <DefaultAlbumList
        name="한국 미니 앨범"
        albums={korMiniAlbums}
        images={korMiniAlbumImages}
        handleClick={() => handleClick('/album/kor/mini')}
      />
      <DefaultAlbumList
        name="한국 싱글"
        albums={korSingles}
        images={korSingleImages}
        handleClick={() => handleClick('/album/kor/single')}
      />
      <DefaultAlbumList
        name="한국 디지털 싱글"
        albums={korDigitalSingles}
        images={korDigitalSingleImages}
        handleClick={() => handleClick('/album/kor/digitalSingle')}
      />
    </AlbumListContainer>
  );
}
