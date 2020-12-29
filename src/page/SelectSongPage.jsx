import React from 'react';

import { useHistory } from 'react-router-dom';

import TopBarContainer from '../container/TopBarContainer';
import SelectSongContainer from '../container/SelectSongContainer';
import ButtonsBarContainer from '../container/ButtonsBarContainer';

export default function SelectSongPage() {
  const history = useHistory();

  function handleClickResult() {
    history.push('/result');
  }

  return (
    <>
      <TopBarContainer />
      <SelectSongContainer />
      <ButtonsBarContainer handleClickResult={handleClickResult} />
    </>
  );
}
