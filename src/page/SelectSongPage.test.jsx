import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import SelectSongPage from './SelectSongPage';

test('SelectSongPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <SelectSongPage />
    </MemoryRouter>
  ));

  expect(getByText(/SelectSongPage/)).not.toBeNull();
});
