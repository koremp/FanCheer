import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  expect(getByText(/HomePage/)).not.toBeNull();
});
