import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CheerSongListContainer from './CheerSongListContainer';

import songList from '../../fixtures/songList';

jest.mock('../assets/images');

test('CheerSongListContainer', () => {
  const handleClick = jest.fn();

  const { getByAltText } = render((
    <CheerSongListContainer
      handleClick={handleClick}
    />
  ));
});
