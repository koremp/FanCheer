import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import SongContainer from '../SongContainer';

import songList from '../../../fixtures/songList';

jest.mock('../../assets/images');

test('SongContainer', () => {
  const handleClick = jest.fn();

  const song = songList[1];

  const { getByAltText } = render((
    <SongContainer
      song={song}
      handleClick={handleClick}
    />
  ));
});
