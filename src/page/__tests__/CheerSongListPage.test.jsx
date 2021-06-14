import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import CheerSongListPage from './CheerSongListPage';

import songList from '../../fixtures/songList';

jest.mock('../assets/images');

test('CheerSongListPage', () => {
  const { getByText } = render((
    <CheerSongListPage />
  ));
});
