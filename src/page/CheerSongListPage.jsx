import React from 'react';

import { useHistory } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import CheerSongListContainer from '../container/CheerSongListContainer';

export default function CheerSongListPage() {
  const history = useHistory();

  function handleClick(url) {
    history.push(url);
  }

  return (
    <>
      <TopBarContainer handleClick={handleClick} />
      <CheerSongListContainer handleClick={handleClick} />
    </>
  );
}
