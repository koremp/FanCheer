import React from 'react';

import Home from '../component/Home';

export default function HomeContainer({ handleClickLink }) {
  function handleClickAbout() {
    handleClickLink('/about');
  }

  function handleClickMembers() {
    handleClickLink('/member');
  }

  function handleClickSongList() {
    handleClickLink('/song');
  }

  function handleClickCheerSongList() {
    handleClickLink('/cheer-song');
  }

  function handleClickAlbum() {
    handleClickLink('/album');
  }

  return (
    <Home
      handleClickAbout={handleClickAbout}
      handleClickMembers={handleClickMembers}
      handleClickSongList={handleClickSongList}
      handleClickCheerSongList={handleClickCheerSongList}
      handleClickAlbum={handleClickAlbum}
    />
  );
}
