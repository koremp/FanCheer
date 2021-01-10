import React from 'react';

import CheerSongList from '../component/CheerSongList';

import songList from '../../fixtures/songList';

export default function CheerSongContainer({ handleClick }) {
  return (
    <CheerSongList
      songList={songList}
      handleClick={handleClick}
    />
  );
}
