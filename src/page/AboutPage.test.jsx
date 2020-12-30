import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import AboutPage from './AboutPage';

jest.mock('../assets/images');

test('AboutPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
  ));
});
