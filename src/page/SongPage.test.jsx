import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import SongPage from './SongPage';

test('SongPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <SongPage />
    </MemoryRouter>
  ));

  expect(getByText(/SongPage/)).not.toBeNull();
});
