import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import NotFoundPage from '../NotFoundPage';

jest.mock('../../assets/images');

test('NotFoundPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  ));
});
