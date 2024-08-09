import React from 'react';

import { useNavigate } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import CheerSongListContainer from '../container/CheerSongListContainer';

export default function CheerSongListPage() {
  const nav = useNavigate();

  function handleClick(url) {
    nav(url);
  }

  return (
    <>
      <TopBarContainer handleClick={handleClick} />
      <CheerSongListContainer handleClick={handleClick} />
    </>
  );
}
