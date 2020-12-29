import React from 'react';

import Home from '../component/Home';

export default function HomeContainer({ handleClickLink }) {
  function handleClickAbout() {
    handleClickLink('/about');
  }

  function handleClickMembers() {
    handleClickLink('/member');
  }

  function handleClickSelectSong() {
    handleClickLink('/select-song');
  }

  function handleClickContributors() {
    handleClickLink('/contributors');
  }

  return (
    <Home
      handleClickAbout={handleClickAbout}
      handleClickMembers={handleClickMembers}
      handleClickSelectSong={handleClickSelectSong}
      handleClickContributors={handleClickContributors}
    />
  );
}
