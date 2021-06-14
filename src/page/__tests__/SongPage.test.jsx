import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import SongPage from './SongPage';

import songList from '../../../fixtures/songList';

jest.mock('../../assets/images');

test('SongPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <SongPage match={{ params: { id: 1 } }} />
    </MemoryRouter>
  ));
});
