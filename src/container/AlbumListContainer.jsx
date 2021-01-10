import React from 'react';

import AlbumList from '../component/AlbumList';

export default function AlbumListContainer({
  korMiniAlbums,
  korSingles,
  korDigitalSingles,
  etcAlbums,
  handleClick,
}) {
  return (
    <AlbumList
      korMiniAlbums={korMiniAlbums}
      korSingles={korSingles}
      korDigitalSingles={korDigitalSingles}
      etcAlbums={etcAlbums}
      handleClick={handleClick}
    />
  );
}
