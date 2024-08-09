import React from 'react';

import Home from '../component/Home';

export default function HomeContainer({ handleClickLink }) {
  function handleClickAbout() {
    handleClickLink('/about');
  }

  function handleClickMembers() {
    handleClickLink('/member');
  }

  function handleClickAlbum() {
    handleClickLink('/album');
  }

  function handleClickCheerSongList() {
    handleClickLink('/cheer-song');
  }

  return (
    <Home
      handleClickAbout={handleClickAbout}
      handleClickMembers={handleClickMembers}
      handleClickAlbum={handleClickAlbum}
      handleClickCheerSongList={handleClickCheerSongList}
    />
  );
}
