import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import ContributorsPage from './ContributorsPage';

jest.mock('../assets/images');

test('ContributorsPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <ContributorsPage />
    </MemoryRouter>
  ));
});
