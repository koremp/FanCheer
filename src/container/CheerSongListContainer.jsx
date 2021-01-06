import React from 'react';

import CheerSongList from '../component/CheerSongList';

import songList from '../../fixtures/songList';

export default function CheerSongContainer({ handleClick }) {
  const ids = [1, 2, 3, 4, 5, 6, 7];

  return (
    <CheerSongList
      ids={ids}
      songList={songList}
      handleClick={handleClick}
    />
  );
}
