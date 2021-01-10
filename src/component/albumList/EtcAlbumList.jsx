import React from 'react';

import AlbumListContainer from './AlbumListContainer';
import AlbumLayout from './AlbumLayout';
import AlbumListName from './AlbumListName';
import EtcAlbum from './EtcAlbum';

import { etcAlbumImages } from '../../assets/images';

export default function EtcAlbumList({ etcAlbums }) {
  return (
    <AlbumListContainer>
      <AlbumListName>기타 음반</AlbumListName>
      <AlbumLayout>
        {
          etcAlbums.map((album) => (
            <EtcAlbum
              key={album.id}
              backgroundColor={album.backgroundColor}
              color={album.color}
              album={album}
              image={etcAlbumImages[album.id]}
            />
          ))
        }
      </AlbumLayout>
    </AlbumListContainer>
  );
}
