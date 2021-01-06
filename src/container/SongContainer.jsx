import React from 'react';

import Song from '../component/Song';

export default function SongContainer({ song, handleClick }) {
  return (
    <Song song={song} handleClick={handleClick} />
  );
}
