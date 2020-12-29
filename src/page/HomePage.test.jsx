import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

jest.mock('../assets/images');

test('HomePage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));
});
