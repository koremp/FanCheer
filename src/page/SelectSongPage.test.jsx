import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import SelectSongPage from './SelectSongPage';

jest.mock('../assets/images');

test('SelectSongPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <SelectSongPage />
    </MemoryRouter>
  ));
});
