import React from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialData } from '../slice';

import Home from '../component/Home';

export default function HomeContainer({
  handleClickLink,
}) {
  const dispatch = useDispatch();

  function handleClickSelectSong() {
    dispatch(loadInitialData());
    handleClickLink('/select-song');
  }

  return (
    <Home
      handleClickSelectSong={handleClickSelectSong}
    />
  );
}
