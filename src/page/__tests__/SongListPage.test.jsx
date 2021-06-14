import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import SongListPage from '../SongListPage'; 

jest.mock('../../assets/images');

test('SongListPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <SongListPage />
    </MemoryRouter>
  ));
});
