import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  ));

  expect(getByText(/NotFoundPage/)).not.toBeNull();
});
