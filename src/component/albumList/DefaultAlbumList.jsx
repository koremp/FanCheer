import React from 'react';

import AlbumListContainer from './AlbumListContainer';
import AlbumListName from './AlbumListName';
import AlbumLayout from './AlbumLayout';

import DefaultAlbum from './DefaultAlbum';

export default function DefaultAlbumList({
  name, albums, images,
}) {
  return (
    <AlbumListContainer>
      <AlbumListName>{name}</AlbumListName>
      <AlbumLayout>
        {
          albums.map((album) => (
            <DefaultAlbum
              backgroundColor={album.backgroundColor}
              color={album.color}
              album={album}
              image={images[album.name]}
            />
          ))
        }
      </AlbumLayout>
    </AlbumListContainer>
  );
}
