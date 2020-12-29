import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import SongPage from './SongPage';

jest.mock('../assets/images');

test('SongPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <SongPage />
    </MemoryRouter>
  ));

  expect(getByText(/SongPage/)).not.toBeNull();
});
