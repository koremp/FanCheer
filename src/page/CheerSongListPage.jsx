import React from 'react';

import { useNavigate } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import CheerSongListContainer from '../container/CheerSongListContainer';

export default function CheerSongListPage() {
  const history = useNavigate();

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
